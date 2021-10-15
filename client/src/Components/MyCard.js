import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link, Redirect, useHistory } from 'react-router-dom'

const SearchCard = (props) => { 
  const { user } = useContext(AuthContext)
  const [ownedId, setOwnedIds] = useState([])
  const history = useHistory()

  useEffect(()=>{
    getOwnedcards()
  },[])

  const getOwnedcards = async()=> {
    try{
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      let ownedIds = res.data.map(c => c.punchcard_id)
      setOwnedIds(ownedIds)
    }catch(err){
      console.log(err)
    }
  }

  const addToWallet = async (punchcard_id) => {
    let user_id = user.id
    try{
      let res = await axios.post(`/api/users/${user.id}/user_punchcard`, {punchcard_id, user_id} )
      getOwnedcards()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
  <div className="searchCard">
  <MyCard>
    <Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
        <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
          <Dropdown.Menu>
          {ownedId.includes(props.punch_id) ?
          <Dropdown.Item onClick={()=>history.push('/dashboard')}>View in Wallet</Dropdown.Item>:
          <Dropdown.Item onClick={()=>addToWallet(props.punch_id)}>Add To Wallet</Dropdown.Item>}
          </Dropdown.Menu>
        </Dropdown>
    </Row> 
    <Row style={{alignItems:'center'}}>
            <Col><Card.Img className='cardImg' src={props.logo}/></Col>
      <Col className='nameCol'>
        <Row>
            <Card.Title>
            <h1>{props.restaurant_name}</h1>
            </Card.Title>
        </Row>
        <Row>
          <span>{props.city}</span>
        </Row>
        <Row>
            {ownedId.includes(props.punch_id) ? <span style={{color:'green'}}>You own this card</span> : <p></p>}
        </Row>
      </Col>
    </Row>
  </MyCard>
  </div>
  )
}


const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const MyCard = styled(Card)`
  width: 80vw;
  // height: 200px;
`
export default SearchCard
