import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
      <p>U</p>
      <input value={uCode} onChange={handleUChange} />
      <p>P</p>
      <input value={pCode} onChange={handlePChange} />
      <button type='submit'>Enter</button>
    </Form>
  )
}

export default ManualPunchCard