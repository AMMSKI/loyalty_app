import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../StyleSheets/QR.css'

const ManualPunchCard = (props) => {
  const [pCode, setPCode] = useState('')
  const [uCode, setUCode] = useState('')

  const handleUChange = (e) => {
    setUCode(e.target.value)
  }
  const handlePChange = (e) => {
    setPCode(e.target.value)
  }
//`localhost:3000/punchcardAdmin/${user_id}/${punchcard_id}`

  const handleSubmit = () => {
    props.history.push(`/punchcardAdmin/${uCode}/${pCode}`)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <div className='manual_enter'>
        <input className='manual_input' value={uCode} onChange={handleUChange} />
        <div>
        <h1 className='dash'>-</h1>
        </div>
        <input className='manual_input' value={pCode} onChange={handlePChange} />
      </div>
      <button type='submit'>PunchCard</button>
    </Form>
  )
}

export default ManualPunchCard