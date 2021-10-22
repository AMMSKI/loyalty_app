import axios from "axios";
import React, {  useEffect, useState } from 'react'
import {  Icon, Segment } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import RewardForm from "../Components/RewardForm";


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