import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FilePond } from "react-filepond";
import { Form, Input, Button } from "semantic-ui-react";

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
    <Card style={{textAlign:'center'}}>
      <Form onSubmit={handleSubmit}>
        <p>Upload New Logo</p>
      <FilePond
        name='file'
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={fileChanged}
        labelIdle='Browse'
        />
        <p>Name</p>
        <Input value={name} onChange={handleNameChange}/><br/>
        <p>City</p>
        <Input value={city} onChange={handleCityChange}/><br/>
        <p>Zip</p>
        <Input value={zip} onChange={handleZipChange}/><br/>
        <p>Phone#</p>
        <Input value={phone} onChange={handlePhoneChange}/><br/>
        <Button type='submit'>Update</Button>
        </Form>
    </Card>
  )
}

export default RestaurantEdit
