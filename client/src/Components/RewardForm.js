import axios from "axios";
import { useState } from "react";

const RewardForm = ({id}) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(`/api/punchcards/${id}/rewards`, { name, description, cost, punchcard_id: id })
        console.log(res)
      setName('');
      setDescription('');
      setCost('');
    } catch (error) {
      console.log('failed',error)
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
          <input value={description} onChange={e => setDescription(e.target.value)} />
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

