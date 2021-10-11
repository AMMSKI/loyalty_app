import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import '../StyleSheets/App.css'

const Earn = (props) => {
  const { user } = useContext(AuthContext)
  const [punchcardData, setPunchcardData] = useState([])
  const [ownedCards, setOwnedCards] = useState([])

  useEffect(()=>{
    getData()
    getOwnedCards()
  },[])

  const getData = async() => {
    const userpunchcard_id = props.match.params.userpunchcard_id
    try {
      let res = await axios.get(`/api/users/${user.id}/user_punchcard/${userpunchcard_id}`)
      setPunchcardData(res.data)
    } catch (error) {
    }
  }

  const getOwnedCards = async() => {
    try {
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      let ownedIds = res.data.map(c => c.punchcard_id)
      setOwnedCards(ownedIds)
    } catch (error) {
      
    }
  }

  const addToWallet = async (punchcard_id) => {
    let user_id = user.id
    try{
      await axios.post(`/api/users/${user.id}/user_punchcard`, {punchcard_id, user_id} )
    }catch(err){

    }
  }

  // Add this below when it's a reasonable length: {punchcardData.description}

  return (
    <div className="content">
      <div className="jumbotron text-center">
        <h1>{punchcardData.restaurant_name}</h1>
        <h5>Earn points by purchasing our delicious food and then cash
          them in for rewards.
        </h5>
        <br /> 
        <div>
        {ownedCards.includes(punchcardData.punchcard_id) ?
          <strong>Already in wallet</strong>
          :
          <button onClick={()=> addToWallet(punchcardData.punchcard_id)}> Add Card </button>
        }
          <br />
        </div>
          <div className="circle">
            <div className="circle__inner">
              <div className="circle__wrapper">
                <h1 className="circle__content">Points: {punchcardData.current_points}</h1>
              </div>
            </div>
          </div>
        <div>
          <Link to="/showqr">
            <button >Earn Points QR</button>
          </Link>
        </div> 
        <br /> 
        <hr />
        <h5>Rewards</h5>
      </div>
    </div>
  )
}

export default Earn

//Map through rewards here. Logic makes ones whose points are less than or equal to current_points GREEN.