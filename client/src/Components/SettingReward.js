import axios from "axios";
import React, {  useEffect, useState } from 'react'
import {  Icon, Segment } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import RewardForm from "../Components/RewardForm";
import '../StyleSheets/CustomerRewards.css'


const SettingReward = ({punchcard_id}) => {
  const [showRewardForm, setShowRewardForm] = useState(false)
  const [rewards, setRewards] = useState([])


  useEffect(()=>{
    getRewards()
    window.scrollTo(0, 0)
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
          <div className=" cust-rewards-cards setting-reward-card">
            <h1 className="rewards-title">{r.name}</h1>
            <p>Cost: {r.cost}</p>
            <p>{r.description}</p>
            <Button onClick={() => deleteReward(r.id)} style={{backgroundColor:"#D7272F", border:"solid 1px black"}}>
              <Icon name='trash' />
            </Button>
          </div>
        </div>
      )
    })
  }

  return(
    <div className="settings-rewards-page">
      {renderRewards()}
        {showRewardForm && 
          <RewardForm   
          getRewards={getRewards} 
          id={punchcard_id} 
          showRewardForm={showRewardForm}
          setShowRewardForm={setShowRewardForm} />
        }
        <button
          onClick={() => setShowRewardForm(!showRewardForm)}
          className="reward_button loginbutton GoldWebGoldenBackG BlackFontC" >
          {showRewardForm ? 'Close' : 'Add Reward'}
        </button>
      </div>
  )
}

export default SettingReward