import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Charting from './Charting';
import '../StyleSheets/Admin.css'

function Admin(props) {
  const { user } = useContext(AuthContext)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards()
  }, [])

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
    }, 0)
  }

  return (
    <div className="admin-page">
      <div className="jumbotron text-center">
        <div className="avatar-container">
          <Avatar
            style={{ border: "solid 1px gray" }}
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
        <Grid.Row>
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
              { cards.length && Math.floor(sumPoints() / cards.length)}
            </p>
            Average/Card
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='middle' centered>
          <div className="chart-container">
            <div className="chart-box">
              <Charting />
            </div>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Admin;
