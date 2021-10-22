import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RewardForm from '../Components/RewardForm';
import Reward from './Reward';

const Rewards = (props) => {
  const [rewards, setRewards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  let {punchcardId} = props
  punchcardId = 1 //remove later

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = async () => {
    try {
      let res = await axios.get(`/api/punchcards/${punchcardId}/rewards`);
      setRewards(res.data);
    } catch (err) {
      console.log(err);
    };
  };

  const deleteReward = async (id) => {
     try {
      await axios.delete(`/api/punchcards/${punchcardId}/rewards/${id}`);
      setRewards(rewards.filter((f) => f.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const renderRewards = () => {
    return rewards.map(reward => {
      return (
        <div key={reward.id}>
          <Reward reward={reward} deleteReward={deleteReward} />
        </div>
      );
    });
  };

  const handleShowForm = () => {
    setShowForm(showForm => {
      return !showForm;
    });
  };

  return (
    <div>
      <button onClick={handleShowForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && 
        <RewardForm 
          punchcardId={punchcardId}
        />
      }
      <h2>Rewards</h2>
      {renderRewards()}
    </div>
  )
}

export default Rewards;