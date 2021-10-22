import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import '../StyleSheets/Punchreward.css'

const PunchCardAdmin = (props) => {
  const { user } = useContext(AuthContext)
  const customer_id = props.match.params.user_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const [restUserId, setRestUserId] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(null)

  useEffect(()=>{
    getUserPunchCard()
  },[])

  const getUserPunchCard = async () => {
    try{
      let res = await axios.get(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`)
      // setRestId(res.data.restaurant_id)
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

  const updatePoints = async (newPoints) => {
    const points = newPoints + currentPoints
    try{
      let res = await axios.put(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`, {current_points:points})
      setCurrentPoints(points)
      alert(`${newPoints} points added to user card`)
    }catch(err){
      console.log(err)
    }
  }

      if(user.account_type === 'customer'){
        return (
          <div className='admin_header'>
            nice try buddy......
          </div>
        )
      }
    
      if(user.id === restUserId){
      return (
        <>
        <div className='admin_header'>
          <h1>Add Points to Customers Card</h1>
        </div>

        <div className='admin_container'>
          <div className='admin_button_container'>
            <button className='admin_button' onClick={()=>updatePoints(5)}>Add 5 points</button>
          </div>
          <div className='admin_button_container'>
            <button className='admin_button' onClick={()=>updatePoints(10)}>Add 10 points</button>
          </div>
          <div className='admin_button_container'>
            <button  className='admin_button' onClick={()=>updatePoints(15)}>Add 15 points</button>
          </div>
        </div>
        </>
      )
      }else{
        return(
          <div className='admin_header'>Invalid QR</div>
        )
      }
}


export default PunchCardAdmin