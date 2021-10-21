import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import '../StyleSheets/Earn.css'
import CustomerRewards from './CustomerRewards';
import burgpoints from "../BurgerPoints.png";
import { Image } from 'semantic-ui-react';

const Earn = (props) => {
  const { user } = useContext(AuthContext)
  const [punchcardData, setPunchcardData] = useState([])
  // const [ownedCards, setOwnedCards] = useState([])
  const userpunchcard_id = props.match.params.userpunchcard_id

  useEffect(() => {
    getData()
    // getOwnedCards()
  }, [])

  const getData = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/user_punchcard/${userpunchcard_id}`)
      setPunchcardData(res.data)
    } catch (error) {
    }
  }

  // const getOwnedCards = async () => {
  //   try {
  //     let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
  //     let ownedIds = res.data.map(c => c.punchcard_id)
  //     setOwnedCards(ownedIds)
  //   } catch (error) {

  //   }
  // }

  // const addToWallet = async (punchcard_id) => {
  //   let user_id = user.id
  //   try {
  //     await axios.post(`/api/users/${user.id}/user_punchcard`, { punchcard_id, user_id })
  //   } catch (err) {

  //   }
  // }


  return (
    <div className="earn-page WhiteBackG">
      <div>
        <h1 className="earn-h1">{punchcardData.restaurant_name}</h1>
        <h5>{punchcardData.description}</h5>
        <br />
        {/* <div>
        {ownedCards.includes(punchcardData.punchcard_id) ?
          <strong>Already in wallet</strong>
          :
          <button onClick={()=> addToWallet(punchcardData.punchcard_id)}> Add Card </button>
        }
          <br />
        </div> */}
        <div className="points-img-container">
          <Image 
            src={burgpoints} 
            size="small" 
            verticalAlign="middle" />
          <h1 className="points BlackFontC">
            {punchcardData.current_points} Points
          </h1>
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
        <hr className="rounded GoldWebGoldenFontC"/>
        <CustomerRewards
          punchcardData={punchcardData}
          userpunchcard_id={userpunchcard_id} />
      </div>
    </div>
  )
}

export default Earn
