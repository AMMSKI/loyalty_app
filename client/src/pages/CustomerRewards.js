import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../StyleSheets/CustomerRewards.css'


const CustomerRewards = ({ punchcardData, userpunchcard_id }) => {
  const [rewards, setRewards] = useState([])
  const [showRewards, setShowRewards] = useState(false)

  const punchcardId = punchcardData.punchcard_id; 

  useEffect(() => {
    if(!punchcardId)
      return;

    axios.get(`/api/punchcards/${punchcardId}/rewards`)
      .then(res => {
        setRewards(res.data);
      });
  }, [punchcardId]);

  const toggleRewards = async () => {
    if(!showRewards){
      window.scrollTo(0, 1000)
    }else{
      window.scrollTo(0,0)
    }
    setShowRewards(!showRewards)

  }


  const renderRewards = () => {
    return rewards.map((r) => {
      const canAfford = r.cost < punchcardData.current_points;

      return (
        <div>
          <div className="cust-rewards-cards">
            <div>
              <h1 className="rewards-title">{r.name}</h1>
              <p>{r.description}</p>
            </div>

            <div className={`cash-or-cost ${canAfford ? 'can-afford' : 'cant-afford'}`}>
              {canAfford ?
                <Link
                  style={{textDecoration:'none', color:'#FFD700'}}
                  to={`/rewardQR/${r.id}/${userpunchcard_id}`}
                  reward_id={r.id}
                  userpunchcard_id={userpunchcard_id} >
                    Cash In Reward
                </Link> 
                :
                `Cost: ${r.cost} points`
              }
            </div>

          </div>
        </div>
      )
    })
  }

  const Arrows = () => (
    showRewards ? <Icon name="angle double up" /> : <Icon name="angle double down" />
  );

  return (
    <div className="customer-rewards-page">
      <div className="link-button" onClick={() => toggleRewards()}>
        <button className="red-button">
          <Arrows/>
            {showRewards ? 'HIDE' : 'SHOW'} REWARDS
          <Arrows/>
        </button>
      </div>
      {showRewards && renderRewards()}
    </div>
  )
}

export default CustomerRewards