import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Card } from 'react-bootstrap'
import styled from "styled-components";
import juicyburger from "../images/juicyburger.png";
import SettingsPunchcard from "../Components/SettingsPunchcard";
import SettingReward from "../Components/SettingReward";
import SettingsRestaurant from "../Components/SettingsRestaurant";
import '../StyleSheets/Settings.css'
import { Redirect } from "react-router";
import FinishSignUp from "./FinishSignUp";

const Settings = () => {

  const { user } = useContext(AuthContext)
  const [restaurant, setRestaurant] = useState([])
  const [punchcard, setPunchcard] = useState([])
  const [page, setPage] = useState('punchcard')
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    getRestaurant()
  }, [])

  const getRestaurant = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/restaurants`)
      setRestaurant(res.data[0])
      getPunchcard(res.data[0].id)
      console.log(res.data[0])
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
        <SettingsPunchcard 
          restaurant={restaurant} 
          punchcard={punchcard} 
          getRestaurant={getRestaurant}/>
        </>
      )
    } else if (page === 'rewards') {
      return (
        <>
        <SettingReward 
          punchcard_id={punchcard.id}/>
        </>
      )
    } else if (page === 'restaurant') {
      return (
        <SettingsRestaurant 
          restaurant={restaurant} 
          getRestaurant={getRestaurant}/>
      )
    }
  }

  if(!restaurant || !punchcard ){
    return(
      <FinishSignUp />
    )
    }else{
      return (
        <>
          <div className="settings-page">
          <Menu 
            secondary 
            fixed 
            style={{
              justifyContent:'space-around', 
              paddingTop:"24px", 
              paddingBottom:'24px',
              }}>
            <Menu.Item 
              onClick={()=>{setPage('punchcard'); setShowImage(false)}}
              style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px",
              backgroundColor:"white",
              fontWeight:"bolder"
              }}>
              PunchCard
            </Menu.Item>
            <Menu.Item 
              onClick={()=>{setPage('rewards'); setShowImage(false)}}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px",
                backgroundColor:"white",
                fontWeight:"bolder"
                }}>
              Rewards
            </Menu.Item>
            <Menu.Item 
              onClick={()=> {setPage('restaurant'); setShowImage(false)}}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 1px 2px",
                backgroundColor:"white",
                fontWeight:"bolder"}}>
              Restaurant
            </Menu.Item>
          </Menu>
          </div>
          {/* <div  className="burger-holder">
          {/* { showImage &&
          <img 
            className="juicy-burger"
            src={juicyburger} 
          /> */}
          {/* } */}
          {/* </div> */}
          {renderPage()}
        </>
      )
    }

}







const MyDropdown = styled(Dropdown)`
  color: white;
`


export default Settings