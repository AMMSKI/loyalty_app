import axios from "axios";
import React, { useEffect, useState } from "react";
// rewardAdmin/:reward_id/:punchcard_id\


const RewardAdmin = (props) => {
  const [reward, setReward] = useState([])
  const [currentPoints, setCurrentPoints] = useState(null)
  const reward_id = props.match.params.reward_id
  const userpunchcard_id = props.match.params.userpunchcard_id

  useEffect(()=>{
    getReward()
    getUserPunchCard()
  },[])

  const getReward = async() => {
    try{
      let res = await axios.get(`/api/punchcards/null/rewards/${reward_id}`)
      setReward(res.data)
    }catch(err){
      console.log(err)
    }
  }
  const getUserPunchCard = async () => {
    try{
      let res = await axios.get(`/api/users/null/user_punchcard/${userpunchcard_id}`)
      console.log(res.data.current_points)
      setCurrentPoints(res.data.current_points)
    }catch(err){
      console.log(err)
    }
  }

  const chargeReward = async (chargePoints) => {
    const points = currentPoints - chargePoints
    try{
      let res = await axios.put(`/api/users/null/user_punchcard/${userpunchcard_id}`, {current_points:points})
      console.log(res)
      setCurrentPoints(points)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>{reward.name}</h1>
      <h3>cost: {reward.cost}</h3>
      <p>{reward.description}</p>
      <button onClick={()=>chargeReward(reward.cost)}>Charge Reward</button>
    </div>
  )
}

export default RewardAdmin