import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";

const RewardForm = ({id, getRewards}) => {

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
      getRewards(id)
    } catch (error) {
      console.log('failed',error)
    }
  };

  return (
    <div>
      <Card style={{textAlign:'center'}}>
      <form onSubmit={submitHandler}>
          <h2>Name:</h2>
          <input value={name} onChange={e => setName(e.target.value)} />
          <h2>Description:</h2>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
          <h2>Cost:</h2>
          <input value={cost} onChange={e => setCost(e.target.value)} /><br/>
          <button type='submit'>Add!</button>
      </form>
      </Card>
    </div>
  );
};

export default RewardForm;

