import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const TestPunchCardAddPoints = (props) => {
  const { user } = useContext(AuthContext)
  const customer_id = props.match.params.user_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const [currentPoints, setCurrentPoints] = useState(null)

  useEffect(()=>{
    getUserPunchCard()
  },[])

  const getUserPunchCard = async () => {
    try{
      let res = await axios.get(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`)
      console.log(res.data.current_points)
      setCurrentPoints(res.data.current_points)
    }catch(err){
      console.log(err)
    }
  }

  const updatePoints = async (newPoints) => {
    const points = newPoints + currentPoints
    try{
      let res = await axios.put(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`, {current_points:points})
      console.log(res)
      setCurrentPoints(points)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>customer id: {customer_id}</h1>
      <h1>punchcard id: {userpunchcard_id}</h1>
      <button onClick={()=>updatePoints(5)}>Add 5 points</button>
    </div>
  )
}

export default TestPunchCardAddPoints