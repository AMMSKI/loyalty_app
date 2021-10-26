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
console.log(props)
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
      <MyCard url={props.logo}>
        <div onClick={
          ownedId.includes(props.punch_id) ? 
          null : 
          () => addToWallet(props.punch_id)}
          className='container_card_div'
        >
          <div className='card_body' >
            <div className='nameCol'>
              <Row>
                <Card.Title>
                  <h1 className='restname'>{props.restaurant_name}</h1>
                </Card.Title>
              </Row>
              <Row>
                <span className='restname'>{props.city}</span>
              </Row>
            </div>
          </div>
            <div className='blahblah1'>
              {ownedId.includes(props.punch_id) ?
              <div className='dropdownRow1 GoldWebGoldenBackG'>
                  <Dropdown.Menu>
                      <Dropdown.Item onClick={() => history.push('/dashboard')}>Owned</Dropdown.Item> 
                  </Dropdown.Menu>
              </div> : <div ></div>}
          </div>
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
  background-image: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%), url(${props => props.url});
  width: 80vw;
  background-position: center;
  background-size: cover;
  font-weight: bolder;
  border-radius: 8px;
`
export default SearchCard
