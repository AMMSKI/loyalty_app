import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import styled from "styled-components";
import PunchcardImageUpload from "../Components/PunchcardUpload";
import PunchCardEdit from "../Components/PunchCardEdit";
import RewardForm from "../Components/RewardForm";
import RestaurantEdit from "../Components/RestaurantEdit";
import Avatar from "react-avatar";

const PunchCardSettings = () => {

const {user} =useContext(AuthContext)
const [restaurant, setRestaurant ] = useState([])
const [punchcard, setPunchcard ] = useState([])
const [rewards, setRewards] = useState([])
const [showEdit, setShowEdit] = useState(false)
const [page, setPage] = useState(null)
const [showRewardForm, setShowRewardForm] = useState(false)
const [showRestEdit, setShowRestEdit] = useState(false)

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
    setRewards(res.data)
  }catch(err){
    console.log(err)
  }
}

const deleteReward = async (id) => {
  try{
    let res = await axios.delete(`/api/punchcards/null/rewards/${id}`)
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
        <h3>{r.name}</h3>
        <p>Cost: {r.cost}</p>
        <h3>{r.description}</h3>
        <Button onClick={()=>deleteReward(r.id)}><Icon name='trash'/></Button>
      </Segment>
    </div>
    )
  })
}

const renderPage = () => {
if(page === 'punchcard'){
  return(
  <>
  <Segment>
<h1>Card preview in customer search page</h1>
<div className="searchCard">
<MyCard1>
<Row style={{paddingLeft:'95%', paddingTop:'5px'}}>
  <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
  </Dropdown>
</Row>
<Row style={{alignItems:'center'}}>
      <Col style={{ alignItems: 'center', padding: '20px' }}><Avatar size="100" round src={restaurant.image}/> </Col>
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
            <h1 style={{color:"white"}}>{restaurant.name}</h1>
            </Card.Title>
            <p style={{color:"white"}}>0 points</p>
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
        <Button onClick={()=>setShowEdit(!showEdit)}>Edit Description</Button> :
        <PunchCardEdit showEdit={showEdit} getRestaurant={getRestaurant} setShowEdit={setShowEdit} id={punchcard.id}
      />}
    </Segment>
  </div>
  </>
  )}else if(page === 'rewards'){
    return(
      <div>
        {renderRewards()}
        <div style={{textAlign:'center'}}>
          {showRewardForm && <RewardForm getRewards={getRewards} id={punchcard.id}/>}
              <button
                onClick={()=>setShowRewardForm(!showRewardForm)}
                className="loginbutton" >
                {showRewardForm ? 'Close' : 'Add Reward'}
              </button>
        </div>
      </div>
    ) 
  }else if(page === 'restaurant'){
    return(
      <>
      <Segment style={{textAlign:'center'}}>
      <Avatar size="300" round src={restaurant.image}/> 
        <h1>{restaurant.name}</h1>
        <p>City: {restaurant.city}</p>
        <p>ZIP: {restaurant.zip}</p>
        <p>#: {restaurant.phone_number}</p>
      </Segment>
      <div style={{textAlign:'center'}}>
      <button 
        onClick={()=>setShowRestEdit(!showRestEdit)}
        className='loginbutton'>{showRestEdit ? 'Close' : 'Edit'}</button>
      {showRestEdit && <RestaurantEdit getRestaurant={getRestaurant} restaurant={restaurant} />}
      </div>
      </>
    )
  }
}

  return(
    <>
      <div style={{paddingTop:'25px'}}>
      <Menu secondary fixed style={{justifyContent:'space-evenly'}}>
        <Menu.Item onClick={()=>setPage('punchcard')}>PunchCard</Menu.Item>
        <Menu.Item onClick={()=>setPage('rewards')}>Rewards</Menu.Item>
        <Menu.Item onClick={()=>setPage('restaurant')}>Restuarant</Menu.Item>
      </Menu>
      </div>
      {renderPage()}
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