import axios from "axios";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Form, Input, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const FinishSignUp = (props) => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [restaurant, setRestaurant] = useState(null)
  const [punchCard, setPunchCard] = useState(null)
  const [description, setDescription] = useState(null)

  const handleCityChange =(e)=>{
    setCity(e.target.value)
  }

  const handleZipChange =(e)=>{
    setZip(e.target.value)
  }

  const handlePhoneChange =(e)=>{
    setPhone(e.target.value)
  }

  const handleNameChange =(e)=>{
    setName(e.target.value)
  }

  const handlePunchChange = (e)=> {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e)=>{
    try{  
      let res = await axios.post(`/api/users/${user.id}/restaurants`, {name, city, zip, phone, user_id:user.id})
      setRestaurant(res.data)
      setName('')
      setCity('')
      setZip('')
      setPhone('')
    }catch(err){
      console.log(err)
    }
  }
  const handlePunchSubmit = async (e)=>{
    try{  
      let res = await axios.post(`/api/users/${user.id}/restaurants/${restaurant.id}/punchcards`, {description, user_id:user.id, restaurant_id:restaurant.id})
      setPunchCard(res.data)
      if(props.location){
        props.history.push('/home')
      }else{
        window.location.reload()
      }
    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <div className='createRestPunch'>
      <Card>
        <h3>Add Restaurant Information</h3>
        <Form onSubmit={handleSubmit}>
          <p>Name</p>
          <Input value={name} onChange={handleNameChange}/><br/>
          <p>City</p>
          <Input value={city} onChange={handleCityChange}/><br/>
          <p>Zip</p>
          <Input value={zip} onChange={handleZipChange}/><br/>
          <p>Phone#</p>
          <Input value={phone} onChange={handlePhoneChange}/><br/>
          <Button type='submit'>Add</Button>
          </Form>
      </Card>
      {restaurant && 
      <Card>
        <h3>Add a reward card</h3>
        <Form onSubmit={handlePunchSubmit}>
          <p>Punch Card Description</p>
          <Input value={description} onChange={handlePunchChange} />
          <Button type='submit'>Add</Button>
        </Form>
      </Card>
      }
    </div>
  )
}

export default FinishSignUp