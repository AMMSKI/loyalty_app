import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'


const PunchCardSetting = () => {
const {user} =useContext(AuthContext)

const [restaurant, setRestaurant ] = useState([])
const [punchcard, setPunchcard ] = useState([])

useEffect(() => {
  getRestaurant()
}, [])

const getRestaurant = async() => {
  try {
  let res = await axios.get(`/api/users/${user.id}/restaurants`)
  setRestaurant(res.data[0])
  getPunchcard(res.data[0].id)  
  } catch (error) {

  }
}


const getPunchcard = async(restId) => {
  try {
  let res = await axios.get(`/api/users/${user.id}/restaurants/${restId}/punchcards`)
  console.log("punchcard:", res.data)
  setPunchcard(res.data[0])
  } catch (error) {

  }
}
  return(
    <>
    {restaurant && <div>

      <h1>{restaurant.name} punchcard:</h1>
      <Card>
    <Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
        <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
        </Dropdown>
    </Row> 
    <Row style={{alignItems:'center'}}>
            <Col><Card.Img className='cardImg' src={punchcard.logo}/></Col>
      <Col className='nameCol'>
        <Row>
            <Card.Title>
            <h1>{restaurant.name}</h1>
            </Card.Title>
        </Row>
        <Row>
          <span>{restaurant.city}</span>
          <span>{punchcard.description}</span>
          <span>total points:{punchcard.total_points}</span>
        </Row>
      </Col>
    </Row>
    </Card>

    </div>}
    <div className='searchCard'>       
        <MyCard url={p.logo}>
        <Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
        <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>props.deletePunchcard(p.up_id)}>Remove</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
        </Row> 
          <MyLink to={`/earn/${p.up_id}`} userpunchcard_id={p.up_id}>
             <Card.Body>
              <Row>
                <Col className='nameCol1'>
                  <Row>
                  <Card.Title>
                  <h1>{p.restaurant_name}</h1>
                  </Card.Title>
                  <p>{p.current_points ? p.current_points : '0'} points</p>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </MyLink>
        </MyCard>
        </div>
    </>
  )
}

export default PunchCardSetting