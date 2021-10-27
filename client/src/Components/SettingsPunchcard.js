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
  const [uploadForm, setUploadForm] = useState(false)
  
  return (
    <>
    <div className='header_setting_container'>
      <h1>Search Preview:</h1>
    </div>
    <div className="searchCard settings_searchCard">
      <MyCard url={punchcard.logo}>
        <div className='container_card_div'>
          <div className='card_body' >
            <div className='nameCol'>
              <Row>
                <Card.Title>
                  <h1 className='restname'>{restaurant.name}</h1>
                </Card.Title>
              </Row>
              <Row>
                <span className='restname'>{restaurant.city}</span>
              </Row>
            </div>
          </div>
            <div className='blahblah1'>
              <div className='dropdownRow1 GoldWebGoldenBackG'>
                  <Dropdown.Menu>
                      <Dropdown.Item>Owned</Dropdown.Item> 
                  </Dropdown.Menu>
              </div>
            </div>
            </div>
      </MyCard>
    </div>

    <div className='header_setting_container'>
      <h1>Wallet Preview:</h1>
    </div>
    <div className='searchCard settings_searchCard'>
      <MyCard1 url={punchcard.logo} >
        <div className='blahblah'>
        <div className='dropdownRow GoldWebGoldenBackG'>
            <Dropdown.Menu>
              <Dropdown.Item>Remove</Dropdown.Item>
            </Dropdown.Menu>
        </div>
        </div>
          <Card.Body>
            <Row>
              <Col className='nameCol1'>
                <Row>
                  <Card.Title>
                    <h1 className='wallet-restaurant-name'>
                      {restaurant.name}
                    </h1>
                  </Card.Title>
                  <p className='points'>
                    10 points
                  </p>
                </Row>
              </Col>
            </Row>
          </Card.Body>
      </MyCard1>
    </div>
    <div className="edit-description WhiteFontC">
        <h2 className="sp-h2">Description</h2>
        <p>{punchcard.description}</p>
        {!showEdit ?
          <button 
          className="loginbutton GoldWebGoldenBackG BlackFontC"
          onClick={() => setShowEdit(!showEdit)}
          >Edit Description
            </button> :
          <PunchCardEdit showEdit={showEdit} getRestaurant={getRestaurant} setShowEdit={setShowEdit} id={punchcard.id}
          />}
          {!uploadForm ?
          <button 
          className="loginbutton GoldWebGoldenBackG BlackFontC"
          onClick={() => setUploadForm(!uploadForm)}
          >Upload Photo
          </button> :
          <div style={{marginTop:'20px', backgroundColor:'white', borderRadius:'5px'}}>
          <PunchcardImageUpload setUploadForm={setUploadForm} uploadForm={uploadForm}/>
          </div>
          }
      </div>
</>
  )
}

const MyCard = styled(Card)`
  background-image: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%), url(${props => props.url});
  width: 80vw;
  background-position: center;
  background-size: cover;
  font-weight: bolder;
  border-radius: 8px;
`
const MyCard1 = styled(Card)`
  background-image: radial-gradient(circle, rgba(59,54,56,0.4822303921568627) 100%, rgba(60,62,64,0) 100%), url(${props => props.url});
  width: 80vw;
  background-position: center;
  background-size: cover;
  font-weight: bolder;
  border-radius: 8px;
`

const MyDropdown = styled(Dropdown)`
  color: white;
`

export default SettingsPunchcard

