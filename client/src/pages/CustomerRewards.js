import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../StyleSheets/CustomerRewards.css'


const CustomerRewards = ({ punchcardData, userpunchcard_id }) => {
  const [rewards, setRewards] = useState([])
  const [showRewards, setShowRewards] = useState(false)

  const getRewards = async () => {
    try {
      let res = await axios.get(`/api/punchcards/${punchcardData.punchcard_id}/rewards`)
      setRewards(res.data)
      setShowRewards(!showRewards)
    } catch (err) {
      console.log(err)
    }
  }


  const renderRewards = () => {
    console.log(rewards)
    return rewards.map((r) => {
      return (
        <div>
          <div className="cust-rewards-cards">
            <div>
              <h1 className="rewards-title">{r.name}</h1>
              <p>{r.description}</p>
            </div>

            {r.cost < punchcardData.current_points ?
              <Link
                to={`/rewardQR/${r.id}/${userpunchcard_id}`}
                reward_id={r.id}
                userpunchcard_id={userpunchcard_id} >

                <div className="cash-or-cost">
                  Cash In Reward
                </div>
              </Link> :
              <div className="cash-or-cost">
                Cost: {r.cost} points
              </div>
            }

          </div>
        </div>
      )
    })
  }

  return (
    <div className="customer-rewards-page">
      <h2
        className="rewards-header"
        onClick={() => getRewards()}>
        <Icon name="arrow alternate circle down" color="yellow" />
          Rewards
        <Icon name="arrow alternate circle down" color="yellow" />
      </h2>
      {showRewards && renderRewards()}
    </div>
  )
}

export default CustomerRewards