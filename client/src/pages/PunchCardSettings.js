import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import { Link } from "react-router-dom";
import PunchcardImageUpload from "../Components/PunchcardUpload";



const PunchCardSettings = () => {
const {user} =useContext(AuthContext)
const [restaurant, setRestaurant ] = useState([])
const [punchcard, setPunchcard ] = useState([])
const [showPunchPic,  setShowPunchPic] = useState(false)

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
        <div>
          <Segment>
            <h1>Card Description</h1>
            <p>{punchcard.description}</p>
          </Segment>
        </div>
        <Segment>
      <h1>Card preview in customer search page</h1>
    <div className="searchCard">
      <MyCard1>
    <Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
        <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
        </Dropdown>
    </Row>
    <Row style={{alignItems:'center'}}>
            <Col><Card.Img className='cardImg' src={punchcard.logo}/></Col>
      <Col className='nameCol'>
        <Row>
            <Card.Title>
            <h1>{restaurant.name} </h1>
            </Card.Title>
        </Row>
        <Row>
          <span>{restaurant.city}</span>
          {/* <span>{punchcard.description}</span> */}
        </Row>
      </Col>
    </Row>
    </MyCard1>
    </div>
    </Segment>
    <Segment>
      <h1>Card preview in customer wallet</h1>
    <div className='searchCard'>
        <MyCard url={punchcard.logo}>
        <Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
            
        <Dropdown defaultOpen pointing='top right' multiple icon='ellipsis vertical'>
          <Dropdown.Menu >
            {!showPunchPic ? 
            <Dropdown.Item onClick={()=>setShowPunchPic(!showPunchPic)}>Edit Picture</Dropdown.Item>:
            <Dropdown.Item><PunchcardImageUpload/></Dropdown.Item>}   
          </Dropdown.Menu>
          </Dropdown>


        </Row>
             <Card.Body>
              <Row>
                <Col className='nameCol1'>
                  <Row>
                  <Card.Title>
                  <h1>{restaurant.name}</h1>
                  </Card.Title>
                  <p>0 points</p>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
        </MyCard>
        </div>
        </Segment>
    </>
  )
}





const MyCard = styled(Card)`
  width: 80vw;
  height: 20vh;
  background-image: url(${props=>props.url});
  background-position: center;
  background-size: cover;
`
const MyCard1 = styled(Card)`
  width: 80vw;
  // height: 200px;
`

const MyDropdown = styled(Dropdown)`
  color: white;
`


export default PunchCardSettings