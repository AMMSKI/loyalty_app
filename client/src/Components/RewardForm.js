import axios from "axios";
import { useState } from "react";

const RewardForm = ({id}) => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [cost, setCost] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.post(`/api/punchcards/${id}/rewards`, { name: name, desc: desc, cost: cost })
      
      setName('');
      setDesc('');
      setCost('');
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

        <button>Submit!</button>
      </form>
    </div>
  );
};

export default RewardForm;

