import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
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
          <Card>
            <Card.Body>
              <h1>{r.name}</h1>
              <Card.Text>
                <p>{r.description}</p>
              </Card.Text>
            </Card.Body>

            {r.cost < punchcardData.current_points ?
              <Link
                to={`/rewardQR/${r.id}/${userpunchcard_id}`}
                reward_id={r.id}
                userpunchcard_id={userpunchcard_id} >

                <Card.Footer>
                  Cash In Reward
                </Card.Footer>
              </Link> :
              <Card.Footer>
                Cost {r.cost} points
              </Card.Footer>
            }

          </Card>
        </div>
      )
    })
  }

  return (
    <div className="customer-rewards-page">
      <h2
        className="rewards-title"
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