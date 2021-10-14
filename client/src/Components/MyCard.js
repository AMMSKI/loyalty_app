import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
// import { Card, Label } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    <div className="searchCard">
    <Card>
    <MyLink to={`/dashboard`}>
      <Card.Body>
        <Row>
        <Col><Card.Img src={props.logo}/></Col>
        <Col className='nameCol'>
        <Card.Title>
      <h1>{props.restaurant_name}</h1>
      </Card.Title>
      <span>{props.city}</span>
        </Col>
        </Row>
      </Card.Body>
        </MyLink>
        {ownedId.includes(props.punch_id) ? <Card.Footer>You own this card</Card.Footer> : <Card.Footer style={{backgroundColor:'#2185D0'}} onClick={()=>addToWallet(props.punch_id)}>Add To Wallet</Card.Footer>}
    </Card>
    </div>
  )
}


const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`
export default MyCard
