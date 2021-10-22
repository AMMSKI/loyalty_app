import React, { useState } from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import PunchcardImageUpload from "../Components/PunchcardUpload";
import PunchCardEdit from "../Components/PunchCardEdit";
import Avatar from "react-avatar";

const SettingsPunchcard = ({restaurant, punchcard, getRestaurant }) => {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <>
          <Segment>
            <h1>Card preview in customer search page</h1>
            <div className="searchCard">
              <MyCard1>
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
          </Segment>
          <Segment>
            <h1>Card preview in customer wallet</h1>
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
                          <h1 style={{ color: "white" }}>{restaurant.name}</h1>
                        </Card.Title>
                        <p style={{ color: "white" }}>0 points</p>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </MyCard>
            </div>
          </Segment>
          <div>
            <Segment>
              <h1>Card Description in Customer Earn Page:</h1>
              <p>{punchcard.description}</p>
              {!showEdit ?
                <Button onClick={() => setShowEdit(!showEdit)}>Edit Description</Button> :
                <PunchCardEdit showEdit={showEdit} getRestaurant={getRestaurant} setShowEdit={setShowEdit} id={punchcard.id}
                />}
            </Segment>
          </div>
        </>
  )
}

const MyCard = styled(Card)`
  width: 80vw;
  height: 20vh;
  background-image: url(${props => props.url});
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

export default SettingsPunchcard