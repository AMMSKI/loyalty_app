import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import styled from "styled-components";
import SettingsPunchcard from "../Components/SettingsPunchcard";
import SettingReward from "../Components/SettingReward";
import SettingsRestaurant from "../Components/SettingsRestaurant";
import '../StyleSheets/Settings.css'
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
              style={page === 'punchcard' ? styles.activeItem : styles.menuItem}>
              PunchCard
            </Menu.Item>
            <Menu.Item 
              onClick={()=>{setPage('rewards'); setShowImage(false)}}
              style={page === 'rewards' ? styles.activeItem : styles.menuItem}>
              Rewards
            </Menu.Item>
            <Menu.Item 
              onClick={()=> {setPage('restaurant'); setShowImage(false)}}
              style={page === 'restaurant' ? styles.activeItem : styles.menuItem}>
              Restaurant
            </Menu.Item>
          </Menu>
          </div>
          <div className='settings-page'>
            <div className='settings-container-media-query'>
            {renderPage()}
            </div>
          </div>
        </>
      )
    }

}


const styles = {
  menuItem: {
  margin: '16px 8px 16px 8px',
  // padding: '24px',
  color: 'white',
  fontWeight: '1000',
  width: '100px',
  backgroundColor: 'black',
  justifyContent: 'center',
  border: 'solid 3px #FFD700',
  borderRadius: '5px',
  boxShadow: 'rgba(43, 5, 5, 0.5) 0px 3px 8px',
  },
  activeItem: {
    margin: '16px 8px 16px 8px',
    // padding: '24px',
    color: '#D7272F',
    width: '100px',
    fontWeight: '1000',
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    border: 'solid 3px black',
    borderRadius: '5px',
    boxShadow: 'rgba(43, 5, 5, 0.5) 0px 3px 8px',
    }

}









export default Settings