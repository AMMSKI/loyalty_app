import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";


const RewardAdmin = (props) => {
  const {user} = useContext(AuthContext)
  const [reward, setReward] = useState([])
  const [currentPoints, setCurrentPoints] = useState(null)
  const [restUserId, setRestUserId] = useState(null)
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

  if(user.id === restUserId){
    return (
      <div className="jumbotron text-center">
        <Card>
              <Card.Body>
                <h1>{reward.name}</h1>
                <h3>cost: {reward.cost}</h3>
                <Card.Text>
                  <p>{reward.description}</p>
                </Card.Text>
                <Button onClick={()=>chargeReward(reward.cost)}>Charge Reward</Button>
              </Card.Body>
        </Card>
      </div>
    )
  }else{
    return(
      <div>Invalid QR</div>
    )
  }

}

export default RewardAdmin