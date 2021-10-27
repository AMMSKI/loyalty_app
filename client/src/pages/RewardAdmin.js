import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import '../StyleSheets/Punchreward.css'


const RewardAdmin = (props) => {
  const {user} = useContext(AuthContext)
  const [reward, setReward] = useState([])
  const [currentPoints, setCurrentPoints] = useState(null)
  const [restUserId, setRestUserId] = useState(null)
  const reward_id = props.match.params.reward_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const [valid, setValid] = useState(false)

  useEffect(()=>{
    getReward()
    getUserPunchCard()
  },[])

  const getReward = async() => {
    try{
      let res = await axios.get(`/api/punchcards/null/rewards/${reward_id}`)
      setReward(res.data)
      setValid(true)
    }catch(err){
      console.log(err)
      setValid(false)
    }
  }
  const getUserPunchCard = async () => {
    try{
      let res = await axios.get(`/api/users/null/user_punchcard/${userpunchcard_id}`)
      setCurrentPoints(res.data.current_points)
      getRestUserId(res.data.restaurant_id)
    }catch(err){
      console.log(err)
    }
  }
  const getRestUserId = async (restId) => {
    try{
      let res = await axios.get(`/api/users/null/user_punchcard/null/restaurants/${restId}`)
      setRestUserId(res.data.user_id)
    }catch(err){
      console.log(err)
    }
  }

  const chargeReward = async (chargePoints) => {
    const points = currentPoints - chargePoints
    try{
      let res = await axios.put(`/api/users/null/user_punchcard/${userpunchcard_id}`, {current_points:points})
      setCurrentPoints(points)
      alert('Reward Charged')
    }catch(err){
      console.log(err)
    }
  }

  if(user.id === restUserId && valid === true && currentPoints > reward.cost){
    return (
      <div className='admin_container'>
            <div className='admin_reward_header'>
              <h1>{reward.name}</h1>
              <h3>cost: {reward.cost}</h3>
            </div>
        <div className='reward_admin'>
            <div className='admin_description'>
                <p>{reward.description}</p>
            </div>
            <div className='admin_button_container'>
              <button className='admin_button' onClick={()=>chargeReward(reward.cost)}>Charge Reward</button>
            </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className='admin_header'>Invalid QR</div>
    )
  }

}

export default RewardAdmin