import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import PunchcardImageUpload from "../Components/PunchcardUpload";
import PunchCardEdit from "../Components/PunchCardEdit";
import RewardForm from "../Components/RewardForm";



const PunchCardSettings = () => {

const {user} =useContext(AuthContext)
const [restaurant, setRestaurant ] = useState([])
const [punchcard, setPunchcard ] = useState([])
const [rewards, setRewards] = useState([])
const [showEdit, setShowEdit] = useState(false)

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
  setPunchcard(res.data[0])
  getRewards(res.data[0].id)
  } catch (error) {
  }
}

const getRewards = async (id) => {
  try {
    let res = await axios.get(`/api/punchcards/${id}/rewards`)
    console.log(res.data)
    setRewards(res.data)
  }catch(err){
    console.log(err)
  }
}

const deleteReward = async (id) => {
  try{
    let res = await axios.delete(`/api/punchcards/null/rewards/${id}`)
    console.log('delete', res)
    getRestaurant()
  }catch(err){
    console.log(err)
  }
}

const renderRewards = () => {
  return rewards.map((r)=>{
    return (
    <div key={r.id}>
      <Segment>
        <h3>Reward:</h3>
        <p>Cost: {r.cost}</p>
        <h3>{r.description}</h3>
        <Button onClick={()=>deleteReward(r.id)}>Delete</Button>
      </Segment>
    </div>
    )
  })
}

  return(
    <>
        <div>
          <Segment>
            <h1>Card Description in Customer Earn Page:</h1>
            <p>{punchcard.description}</p>
            {!showEdit ? 
              <Button onClick={()=>setShowEdit(!showEdit)}>Edit Description</Button> :
              <PunchCardEdit showEdit={showEdit} getRestaurant={getRestaurant} setShowEdit={setShowEdit} id={punchcard.id}
            />}
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
            
        <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
          <Dropdown.Menu >
            <Dropdown.Item>Upload picture<PunchcardImageUpload/></Dropdown.Item>
            
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
      <div>
        <RewardForm id={punchcard.id}/>
        {renderRewards()}
      </div>
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