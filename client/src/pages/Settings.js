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
import juicyburger from "../juicyburger.png";
import SettingsPunchcard from "../Components/SettingsPunchcard";
import SettingReward from "../Components/SettingReward";

const Settings = () => {

  const { user } = useContext(AuthContext)
  const [restaurant, setRestaurant] = useState([])
  const [punchcard, setPunchcard] = useState([])
  const [rewards, setRewards] = useState([])
  const [page, setPage] = useState(null)
  const [showRewardForm, setShowRewardForm] = useState(false)
  const [showRestEdit, setShowRestEdit] = useState(false)
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    getRestaurant()
  }, [])

  const getRestaurant = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/restaurants`)
      setRestaurant(res.data[0])
      getPunchcard(res.data[0].id)
    } catch (error) {
    }
  }
  const getPunchcard = async (restId) => {
    try {
      let res = await axios.get(`/api/users/${user.id}/restaurants/${restId}/punchcards`)
      setPunchcard(res.data[0])
    } catch (error) {
    }
  }

  const renderPage = () => {
    if (page === 'punchcard') {
      return (
        <>
        <SettingsPunchcard restaurant={restaurant} punchcard={punchcard} getRestaurant={getRestaurant}/>
        </>
      )
    } else if (page === 'rewards') {
      return (
        <>
        <SettingReward punchcard_id={punchcard.id}/>
        </>
      )
    } else if (page === 'restaurant') {
      return (
        <>
          <Segment style={{ textAlign: 'center' }}>
            <Avatar size="300" round src={restaurant.image} />
            <h1>{restaurant.name}</h1>
            <p>City: {restaurant.city}</p>
            <p>ZIP: {restaurant.zip}</p>
            <p>#: {restaurant.phone_number}</p>
          </Segment>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowRestEdit(!showRestEdit)}
              className='loginbutton'>{showRestEdit ? 'Close' : 'Edit'}</button>
            {showRestEdit && <RestaurantEdit getRestaurant={getRestaurant} restaurant={restaurant} />}
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div>
      <Menu 
        secondary 
        fixed 
        style={{
          justifyContent:'space-evenly', 
          backgroundColor:"#FFF", 
          paddingTop:"24px", 
          borderBottom:"solid 2px lightgray"}}>
        <Menu.Item 
        onClick={()=>{setPage('punchcard'); setShowImage(false)}}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px"}}>
          PunchCard
        </Menu.Item>
        <Menu.Item 
          onClick={()=>{setPage('rewards'); setShowImage(false)}}
          style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px"}}>
            Rewards
        </Menu.Item>
        <Menu.Item 
          onClick={()=> {setPage('restaurant'); setShowImage(false)}}
          style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px"}}>
            Restaurant
          </Menu.Item>
      </Menu>
      </div>
      { showImage &&
      <img 
        className="juicy-burger"
        src={juicyburger} 
      />
      }
      {renderPage()}
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


export default Settings