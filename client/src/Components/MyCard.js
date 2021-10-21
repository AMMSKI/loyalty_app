import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Avatar from 'react-avatar'

const SearchCard = (props) => {
  const { user } = useContext(AuthContext)
  const [ownedId, setOwnedIds] = useState([])
  const history = useHistory() 

  useEffect(() => {
    getOwnedcards()
  }, [])

  const getOwnedcards = async () => {
    try {
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      let ownedIds = res.data.map(c => c.punchcard_id)
      setOwnedIds(ownedIds)
    } catch (err) {
      console.log(err)
    }
  }

  const addToWallet = async (punchcard_id) => {
    let user_id = user.id
    try {
      let res = await axios.post(`/api/users/${user.id}/user_punchcard`, { punchcard_id, user_id })
      getOwnedcards()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="searchCard">
      <MyCard>
          <div className='dropdown_container'>
          <Dropdown className='dropdown' pointing='top right' multiple icon='ellipsis vertical'>
            <Dropdown.Menu>
              {ownedId.includes(props.punch_id) ?
                <Dropdown.Item onClick={() => history.push('/dashboard')}>View in Wallet</Dropdown.Item> :
                <Dropdown.Item onClick={() => addToWallet(props.punch_id)}>Add To Wallet</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>
          </div>
        <div className='card_body'>
          <div className='avatardiv'>
          <Col><Avatar size="100" round src={props.restaurant_image}/> </Col>
          </div>
          <Col className='nameCol'>
            <Row>
              <Card.Title>
                <h1 className='restname'>{props.restaurant_name}</h1>
              </Card.Title>
            </Row>
            <Row>
              <span className='restname'>{props.city}</span>
            </Row>
            <Row>
              {ownedId.includes(props.punch_id) ? <span style={{ color: "#D7272F" }}>You own this card</span> : <p></p>}
            </Row>
          </Col>
        </div>
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
