import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';


const UserPunchCards = () => {
  const { user } = useContext(AuthContext)
  const [punchcards, setPunchcards] = useState([])
  
  useEffect(()=>{
    getPunchcards()
  },[])

  const getPunchcards = async()=> {
    try{
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      console.log(res.data)
      setPunchcards(res.data)
    }catch(err){
      console.log(err)
    }
  }

  // /api/users/:user_id/user_punchcards/:id

  const deletePunchcard = async (punch_id) => {
    try{
      await axios.delete(`/api/users/${user.id}/user_punchcard/${punch_id}`)
    }catch(err){
      console.log(err)
    }
  }

  const renderPunchcards = () => {
    return punchcards.map((p)=>{
      return (
        <div>
          <Card>
          <h1>{p.restaurant_name}</h1>
          <p>{p.needed_points} Points Required</p>
          <p>{p.punch_descrip}</p>
          <p>You have {p.current_points} points</p>
          <p>{p.punchcard_id}</p>
          <button onClick={()=>deletePunchcard(p.up_id)}>Delete</button>
          </Card>
        </div>
      )
    })
  }
  return (
    <div>
      <h2>Cards In Your Wallet:</h2>
      {punchcards && renderPunchcards()}
    </div>
  )
}

export default UserPunchCards