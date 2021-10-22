import axios from "axios";
import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import RestaurantEdit from "../Components/RestaurantEdit";
import Avatar from "react-avatar";


const SettingsRestaurant = ({restaurant, getRestaurant}) => {
  const [showRestEdit, setShowRestEdit] = useState(false)

  return (
    <>
          <Segment style={{ textAlign: 'center' }}>
            <Avatar size="300" round src={restaurant.image} />
            <h1>{restaurant.name}</h1>
            <p>City: {restaurant.city}</p>
            <p>ZIP: {restaurant.zip}</p>
            <p>#: {restaurant.phone_number}</p>
          </Segment>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowRestEdit(!showRestEdit)}
              className='loginbutton'>{showRestEdit ? 'Close' : 'Edit'}</button>
            {showRestEdit && <RestaurantEdit getRestaurant={getRestaurant} restaurant={restaurant} />}
          </div>
        </>
  )
}

export default SettingsRestaurant