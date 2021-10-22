import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../StyleSheets/QR.css'

const ManualPunchCard = (props) => {
  const [pCode, setPCode] = useState('')
  const [uCode, setUCode] = useState('')
  const [type, setType] = useState('')

  const handleUChange = (e) => {
    setUCode(e.target.value)
  }
  const handlePChange = (e) => {
    setPCode(e.target.value)
  }

  const handleRadioChange = (e) => {
    setType(e.target.value)
  }

  //`localhost:3000/punchcardAdmin/${user_id}/${punchcard_id}`

  const handleSubmit = () => {
    if(type === 'punchcard'){
    props.history.push(`/punchcardAdmin/${uCode}/${pCode}`)
    }else if(type === 'reward'){
    props.history.push(`/rewardAdmin/${uCode}/${pCode}`)
    }else{
      alert('Must Select Add Points or Cash Reward')
    }
  }
 
  
  return(
    <>
    <Form onSubmit={handleSubmit}>
      <div className='manual_enter'>
        <div className='manual-radio'>
          <div className='radio_button'>
            <label>Add Points</label>
            <input type='radio' name='type' onChange={handleRadioChange} value='punchcard' />
          </div>
          <div className='radio_button'>
            <label>Cash Reward</label>
            <input type='radio' name='type' onChange={handleRadioChange} value='reward'/>
          </div>
        </div>
        <div className='manual_body'>
        <input className='manual_input' value={uCode} onChange={handleUChange} />
        <div>
        <h1 className='dash'>-</h1>
        </div>
        <input className='manual_input' value={pCode} onChange={handlePChange} />
        </div>
      <button className='manual_button' type='submit'>Submit</button>
      </div>
    </Form>
    </>
  )
}

export default ManualPunchCard