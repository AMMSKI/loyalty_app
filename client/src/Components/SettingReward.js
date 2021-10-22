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


const SettingReward = ({punchcard_id}) => {
  const [showRewardForm, setShowRewardForm] = useState(false)
  const [rewards, setRewards] = useState([])


  useEffect(()=>{
    getRewards()
  },[])

  const getRewards = async () => {
    try {
      let res = await axios.get(`/api/punchcards/${punchcard_id}/rewards`)
      setRewards(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteReward = async (id) => {
    try {
      let res = await axios.delete(`/api/punchcards/null/rewards/${id}`)
      getRewards()
    } catch (err) {
      console.log(err)
    }
  }

  const renderRewards = () => {
    return rewards.map((r) => {
      return (
        <div key={r.id}>
          <Segment>
            <h3>{r.name}</h3>
            <p>Cost: {r.cost}</p>
            <h3>{r.description}</h3>
            <Button onClick={() => deleteReward(r.id)}><Icon name='trash' /></Button>
          </Segment>
        </div>
      )
    })
  }

  return(
    <div>
      {renderRewards()}
      <div style={{ textAlign: 'center' }}>
        {showRewardForm && <RewardForm getRewards={getRewards} id={punchcard_id} />}
        <button
          onClick={() => setShowRewardForm(!showRewardForm)}
          className="loginbutton" >
          {showRewardForm ? 'Close' : 'Add Reward'}
        </button>
      </div>
    </div>
  )
}

export default SettingReward