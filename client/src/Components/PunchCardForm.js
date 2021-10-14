import React, { useRef, useState } from 'react';

const restaurants = [
  { id: 23, name: 'McChungus' },
  { id: 89, name: 'Welcome to Chili\'s' },
  { id: 734, name: 'Bubba Gump Shrimp' },
];

const PunchCardForm = () => {
  const [restaurantId, setRestaurantId] = useState();
  const [description, setDescription] = useState();
  const [totalPoints, setTotalPoints] = useState(0);

  const logoFile = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const logo = logoFile.current.files[0].name;

    const restaurant = {
      restaurant_id: restaurantId,
      description: description,
      logo: logo,
      totalPoints: totalPoints,
    };

    console.log('Restaurant:', restaurant)
  };

  return (
    <div>
      <h2>Punch Card</h2>

      <form onSubmit={handleSubmit}>
        <div>Restaurant</div>
        <select value={restaurantId} onChange={e => setRestaurantId(e.currentTarget.value)}>
          <option>Select Restaurant</option>
          {restaurants.map(restaurant => {
            return (
              <option value={restaurant.id}>{restaurant.name}</option>
            )
          })}
        </select>

        <div>Description</div>
        <textarea value={description} onChange={e => setDescription(e.currentTarget.value)} />

        <div>Logo</div>
        <input type="file" ref={logoFile}/>

        <div>Total Points</div>
        <input type="input" value={totalPoints} onChange={e => setTotalPoints(e.currentTarget.value)}/>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PunchCardForm;