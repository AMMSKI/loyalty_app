import axios from "axios";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { FilePond } from "react-filepond";
import { Form, Input, Button, Grid, GridColumn } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import "../StyleSheets/FinishSignup.css"

const FinishSignUp = (props) => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [restaurant, setRestaurant] = useState(null)
  const [punchCard, setPunchCard] = useState(null)
  const [description, setDescription] = useState(null)

  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleZipChange = (e) => {
    setZip(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePunchChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    try {
      let res = await axios.post(`/api/users/${user.id}/restaurants`, { name, city, zip, phone_number: phone, user_id: user.id })
      setRestaurant(res.data)
      setName('')
      setCity('')
      setZip('')
      setPhone('')
    } catch (err) {
      console.log(err)
    }
  }
  const handlePunchSubmit = async (e) => {
    try {
      let res = await axios.post(`/api/users/${user.id}/restaurants/${restaurant.id}/punchcards`, { description, user_id: user.id, restaurant_id: restaurant.id })
      setPunchCard(res.data)
      props.history.push('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='finish-signup'>
      <h2 className="finish-header">Add Restaurant Information</h2>
      <div className="finish-form">
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange} />
          <Form.Input
            required
            label="City"
            placeholder="City"
            value={city}
            onChange={handleCityChange} />
          <Form.Input
            required
            label="Zip Code"
            placeholder="Zip Code"
            pattern="^[0-9]{5}(?:-[0-9]{4})?$" 
            title="99999"
            value={zip}
            onChange={handleZipChange} />
          <Form.Input
            required
            label="Phone Number"
            placeholder="Phone Number"
            type="tel"
            pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$" 
            title="999-999-9999"
            value={phone}
            onChange={handlePhoneChange} />
          <button 
            type='submit'
            className="finish-button AmaranthRedBackG WhiteFontC" >
              Add
          </button>
        </Form>
      </div>
      {restaurant &&
        <div>
          <h2 className="finish-header">Add Description</h2>
          <Form onSubmit={handlePunchSubmit}>
            <p>A short description that gives customers
              a little information about your restaurant / 
              reward card.
            </p>
            <Form.Input
              required
              label="About"
              placeholder="About"
              value={description}
              onChange={handlePunchChange} />
            <button 
              className="finish-button AmaranthRedBackG WhiteFontC" 
              type='submit'>
                Add
            </button>
          </Form>
        </div>
      }
    </div>
  )
}


export default FinishSignUp