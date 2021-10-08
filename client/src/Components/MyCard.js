import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
// import { Card, Label } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { Card, Button } from 'react-bootstrap'

const MyCard = (props) => { 
  const { user } = useContext(AuthContext)
  const [ownedId, setOwnedIds] = useState([])
  console.log(props)

  useEffect(()=>{
    getOwnedcards()
  },[])

  const getOwnedcards = async()=> {
    try{
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      console.log('owned cards',res.data)
      let ownedIds = res.data.map(c => c.punchcard_id)
      setOwnedIds(ownedIds)
      console.log(ownedIds)
    }catch(err){
      console.log(err)
    }
  }

  const addToWallet = async (punchcard_id) => {
    let user_id = user.id
    try{
      let res = await axios.post(`/api/users/${user.id}/user_punchcard`, {punchcard_id, user_id} )
      console.log(res)
      getOwnedcards()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div style={{padding:'10px'}}>
    <Card>
      <Card.Body>
        <Card.Title>
      <h1>{props.restaurant_name}</h1>
      </Card.Title>
      <Card.Text>
        <p>{props.description}</p>
        <p>id: {props.punch_id}</p>
        </Card.Text>
        {ownedId.includes(props.punch_id) ? <Card.Footer>You own this card</Card.Footer> : <Card.Footer style={{backgroundColor:'#2185D0'}} onClick={()=>addToWallet(props.punch_id)}>Add To Wallet</Card.Footer>}
      </Card.Body>
    </Card>
    </div>
  )
}



export default MyCard
