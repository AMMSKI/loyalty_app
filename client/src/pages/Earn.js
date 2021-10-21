import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import '../StyleSheets/Earn.css'
import CustomerRewards from './CustomerRewards';
import topBun from "../7.png";
import bottomBun from "../8.png";

const Earn = (props) => {
  const { user } = useContext(AuthContext)
  const [punchcardData, setPunchcardData] = useState([])
  const [ownedCards, setOwnedCards] = useState([])
  const userpunchcard_id = props.match.params.userpunchcard_id

  useEffect(() => {
    getData()
    getOwnedCards()
  }, [])

  const getData = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/user_punchcard/${userpunchcard_id}`)
      console.log(res.data)
      setPunchcardData(res.data)
    } catch (error) {
    }
  }

  const getOwnedCards = async () => {
    try {
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      let ownedIds = res.data.map(c => c.punchcard_id)
      setOwnedCards(ownedIds)
    } catch (error) {

    }
  }

  return (
    <div className="earn-page WhiteBackG">
      <div>
        <h1 className="earn-h1">{punchcardData.restaurant_name}</h1>
        <h5>{punchcardData.description}</h5>
        <br />
        <div className="points-img-container">
          <img 
            className="topbun"
            src={topBun} 
           />
          <h1 className="earn-points BlackFontC">
            {punchcardData.current_points ? 
            `${punchcardData.current_points} Points` : "No Points"
            }
          </h1>
          <img 
            className="bottombun"
            src={bottomBun} 
           />
        </div>
        <div className="link-button">
          <Link
            to={`/addQR/${user.id}/${userpunchcard_id}`}
            user_id={user.id}
            userpunchcard_id={userpunchcard_id}>
            <button className="earn-button">
              EARN POINTS
            </button>
          </Link>
        </div>
        <hr className="rounded"/>
        <CustomerRewards
          punchcardData={punchcardData}
          userpunchcard_id={userpunchcard_id} />
      </div>
    </div>
  )
}

export default Earn
