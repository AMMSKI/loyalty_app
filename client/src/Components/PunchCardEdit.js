import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Input, Segment } from 'semantic-ui-react'

// t.text "description"
//     t.string "logo"
//     t.bigint "restaurant_id", null: false
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.integer "total_points"
const PunchCardEdit = () => {
  const id = 184
  const [description, setDescription] = useState('')
  const [punchcard, setPunchcard] = useState(null)
  
  useEffect(()=>{
    getPunchcard()
  },[])


  const getPunchcard = async () => {
    try{
      let res = await axios.get(`api/users/null/restaurants/null/punchcards/${id}`)
      setPunchcard(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      let res = await axios.patch(`/api/users/null/restaurants/null/punchcards/${id}`, {...punchcard, description})
      alert('update worked')
    }catch(err){
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setDescription(e.target.value)
  }
  return (
    <div>
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Input value={description} onChange={handleChange}/>
        <Button type='submit' > Edit</Button>
      </Form>
    </Segment>
    </div>
  )
}

export default PunchCardEdit