import axios from "axios";
import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import RestaurantEdit from "../Components/RestaurantEdit";
import Avatar from "react-avatar";


const SettingsRestaurant = ({restaurant, getRestaurant}) => {
  const [showRestEdit, setShowRestEdit] = useState(false)

  return (
    <div style={{backgroundColor:"black", paddingTop:"24px"}}>
          <Segment style={{ textAlign: 'center'}}>
            <Avatar size="300" round src={restaurant.image} />
            <h1>{restaurant.name}</h1>
            <p>City: {restaurant.city}</p>
            <p>ZIP: {restaurant.zip}</p>
            <p>PHONE #: {restaurant.phone_number}</p>
          </Segment>
          <div style={{ textAlign: 'center', paddingBottom:'40px', backgroundColor:"black" }}>
            <button
              onClick={() => setShowRestEdit(!showRestEdit)}
              className='loginbutton AmaranthRedBackG WhiteFontC'>
                {showRestEdit ? 'Close' : 'Edit'}</button>
            {showRestEdit && 
            <RestaurantEdit 
              getRestaurant={getRestaurant} 
              restaurant={restaurant} 
              />
              }
          </div>
        </div>
  )
}

export default SettingsRestaurant