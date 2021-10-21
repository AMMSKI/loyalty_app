import React, { useContext, useEffect, useState } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { AuthContext } from '../providers/AuthProvider';
import '../StyleSheets/Admin.css'
import axios from 'axios';
import EmployeeView from '../Components/EmployeeView';
import Charting from './Charting';

function Admin(props) {
  const { user } = useContext(AuthContext)
  const [cards, setCards ] = useState([])
  
  useEffect(()=>{
    getCards()
  },[])
  
  const getCards = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/carddata`)
      console.log(res.data)
      setCards(res.data)
    } catch (error) {
    }
  }

  const sumPoints = () => {
    return cards.reduce((sum, current) => {
      return sum + current.current_points
    }, 0 )
  }

  return (
    <div className="admin-page">
      <div className="jumbotron text-center">
        <div className="avatar-container">
          <Avatar 
            style={{border:"solid 1px gray"}}
            size="100" 
            round 
            src={user.image} 
            />
        </div>
        <h2>{user.name}</h2>
        <h6>{user.account_type}</h6>
      </div>
      <Grid
        color={"white"}
        textAlign='center'
        celled columns='equal'
        style={{ marginTop: "40px" }}>
        <GridRow>
          <Grid.Column>
            <p className="p-admin">
              {cards.length}
            </p>
            Cards
          </Grid.Column>
          <Grid.Column>
            <p className="p-admin">
              {sumPoints()}</p>
            Combined Points
          </Grid.Column>
          <Grid.Column>
            <p className="p-admin">
              {Math.floor(sumPoints()/cards.length)}
              </p>
            Average/Card
          </Grid.Column>
        </GridRow>
        <GridRow style={{
          height: "350px",
        }}>
          <Charting />
        </GridRow>
      </Grid>
    </div>
  );
}

export default Admin;
