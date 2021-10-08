import axios from 'axios';
import { useState } from 'react';

const UpdateReward = (props) => {
  const { reward } = props; 

  const [name, setName] = useState(reward.name);
  const [desc, setDesc] = useState(reward.desc);
  const [cost, setCost] = useState(reward.cost);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.put(`/api/punchcards/${punchcardId}/rewards`, { name: name, desc: desc, cost: cost })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h1>Reward Form</h1>

      <form onSubmit={submitHandler}>
        <p>
          <div>Name:</div>
          <input value={name} onChange={e => setName(e.target.value)} />
        </p>

        <p>
          <div>Description:</div>
          <input value={desc} onChange={e => setDesc(e.target.value)} />
        </p>

        <p>
          <div>Cost:</div>
          <input value={cost} onChange={e => setCost(e.target.value)} />
        </p>

        <button>Update!</button>
      </form>
    </div>
  );
};

export default RewardForm;

