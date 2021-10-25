import React, { useState } from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import PunchcardImageUpload from "../Components/PunchcardUpload";
import PunchCardEdit from "../Components/PunchCardEdit";
import Avatar from "react-avatar";
import "../StyleSheets/Settings.css"

const SettingsPunchcard = ({restaurant, punchcard, getRestaurant }) => {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <div className="sp-page BlackBackG">
      <h2 className="sp-h2">Loyalty Card</h2>
      <div className="searchCard">
        <MyCard1 url={punchcard.logo}>
          <Row style={{ paddingLeft: '95%', paddingTop: '5px' }}>
            <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
            </Dropdown>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col style={{ alignItems: 'center', padding: '20px' }}><Avatar size="100" round src={restaurant.image} /> </Col>
            <Col className='nameCol'>
              <Row>
                <Card.Title>
                  <h1>{restaurant.name} </h1>
                </Card.Title>
              </Row>
              <Row>
                <span>{restaurant.city}</span>
              </Row>
            </Col>
          </Row>
        </MyCard1>
      </div>
      <h2 className="sp-h2">Wallet Card</h2>
      <div className='searchCard'>
        <MyCard url={punchcard.logo}>
          <Row style={{ paddingLeft: '95%', paddingTop: '5px' }}>

            <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
              <Dropdown.Menu >
                <Dropdown.Item>Upload picture<PunchcardImageUpload /></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Card.Body>
            <Row>
              <Col className='nameCol1'>
                <Row>
                  <Card.Title>
                    <h1 style={{ color: "white" , fontWeight:"1000"}}>{restaurant.name}</h1>
                  </Card.Title>
                  <p style={{ color: "white", fontWeight:"1000" }}>0 points</p>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </MyCard>
      </div>
      <div className="edit-description WhiteFontC">
        <h2 className="sp-h2">Description</h2>
        <p>{punchcard.description}</p>
        {!showEdit ?
          <button 
            className="loginbutton AmaranthRedBackG WhiteFontC"
            onClick={() => setShowEdit(!showEdit)}
            >Edit Description
            </button> :
          <PunchCardEdit showEdit={showEdit} getRestaurant={getRestaurant} setShowEdit={setShowEdit} id={punchcard.id}
          />}
      </div>
    </div>
  )
}

const MyCard = styled(Card)`
  width: 80vw;
  height: 20vh;
  background-color: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%);
  background-image: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%), url(${props => props.url});
  background-position: center;
  background-size: cover;
`
const MyCard1 = styled(Card)`
  width: 80vw;
  background-color: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%);
  background-image: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%), url(${props => props.url});
  background-position: center;
  background-size: cover;
  // height: 200px;
`

const MyDropdown = styled(Dropdown)`
  color: white;
`

export default SettingsPunchcard

