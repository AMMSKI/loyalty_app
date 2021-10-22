import axios from "axios";
import { useState } from "react";
import { CardContent, Card, Form, Grid } from "semantic-ui-react";

const RewardForm = ({ id, getRewards }) => {

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
      console.log('failed', error)
    }
  };

  return (
    <div className="rewards-edit-form">
      <Grid>
        <Grid.Column>
          <Form onSubmit={submitHandler} style={{textAlign:"left"}}>
            <Form.Input 
              required
              label="Name" 
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              />
            <Form.Input 
              required
              label="Cost"
              placeholder="Cost"
              onChange={e => setCost(e.target.value)} />
            <Form.TextArea 
              required
              label="Description" 
              placeholder="Describe the reward" 
              onChange={e => setDescription(e.target.value)}
               />
            <button className="yellow-button GoldWebGoldenBackG WhiteFontC" type='submit'>Add!</button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RewardForm;