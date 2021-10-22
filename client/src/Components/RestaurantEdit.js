import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FilePond } from "react-filepond";
import { Form } from "semantic-ui-react";

const RestaurantEdit = ({restaurant, getRestaurant}) => {
  const [name, setName] = useState(restaurant.name)
  const [files, setFiles]= useState([])
  const [city, setCity] = useState(restaurant.city)
  const [zip, setZip] = useState(restaurant.zip)
  const [phone, setPhone] = useState(restaurant.phone_number)

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

  const fileChanged = (fileItems) => {
    setFiles(fileItems)
  }

  const handleSubmit = async (e)=>{
    try{  
      let res = await axios.patch(`/api/users/null/restaurants/${restaurant.id}`, {name, city, zip, phone})
      let image = new FormData()
      image.append('file', files[0].file)
      let res1 = await axios.patch(`/api/users/null/restaurants/${restaurant.id}/update_image`, image)
      console.log(res,res1)
      getRestaurant()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <Card style={{
      textAlign:"left",
      marginTop:"24px", 
      padding:"24px", 
      fontWeight:"bold"}}>
      <Form onSubmit={handleSubmit}>
        <p style={{textAlign:"center"}}>Upload New Logo</p>
      <FilePond
        name='file'
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={fileChanged}
        labelIdle='Browse'
        style={{paddingBottom:"24px"}}
        />
        <Form.Input 
          required
          label="Name"
          value={name} 
          onChange={handleNameChange}
          />
        <Form.Input 
          required
          label="City"
          value={city} 
          onChange={handleCityChange}
          />
        <Form.Input 
          required
          label="Zip"
          pattern="^[0-9]{5}(?:-[0-9]{4})?$" 
          title="99999-9999"
          value={zip} 
          onChange={handleZipChange}
          />
        <Form.Input 
          required
          label="Phone Number (999)-999-999"
          // type="tel"
          // pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$" 
          title="999-999-9999"
          value={phone} 
          onChange={handlePhoneChange}
          style={{paddingBottom:"24px"}}
          />
          <br />
        <button 
          className="yellow-button GoldWebGoldenBackG WhiteFontC" 
          type='submit'>
            Update
        </button>
        </Form>
    </Card>
  )
}

export default RestaurantEdit
