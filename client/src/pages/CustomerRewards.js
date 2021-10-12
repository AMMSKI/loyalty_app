import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CustomerRewards = (props) => {
  const [rewards, setRewards] = useState([])
  
  const getRewards = async () => {
    try{
      let res = await axios.get(`/api/punchcards/${props.punchcardData.punchcard_id}/rewards`)
      console.log(res.data)
      setRewards(res.data)
    }catch(err){
      console.log(err)
    }
  }

  
  const renderRewards = () => {
    return rewards.map((r)=>{
      return (
        <div>
          <Card>
            <Card.Body>
              <h1>{r.name}</h1>
              <Card.Text>
                <p>{r.description}</p>
              </Card.Text>
            </Card.Body>

            {r.cost < props.punchcardData.current_points ?
              <Link to={`/rewardQR/${r.id}/${props.userpunchcard_id}`} reward_id={r.id} userpunchcard_id={props.userpunchcard_id} > 

                <Card.Footer>
                  Cash In Reward
                </Card.Footer> 
              </Link>:
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
    <div>
      <h2 onClick={()=> getRewards()}>Rewards lol</h2>
      {rewards && renderRewards()}
    </div>
  )
}

export default CustomerRewards