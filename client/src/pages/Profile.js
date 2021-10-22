
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { AuthContext } from '../providers/AuthProvider';
import Avatar from 'react-avatar';
import '../StyleSheets/Profile.css'

const Profile = () => {
  const { user } = useContext(AuthContext)


  return (
    <div className="profile-page">
        <div className="avatar-and-name">
          <Link to={`/profileupload/${user.id}`}>
            {user.image ?
              <div>
                <Icon.Group size="huge">
                  <div style={{ padding: "8px" }}>
                    <Avatar size="100" round src={user.image} />
                  </div>
                  <Icon link corner name="edit outline" inverted />
                </Icon.Group>
              </div> :
              <Icon.Group size="huge">
                <Icon name="user" color="black" />
                <Icon link corner name="edit outline" color="black" />
              </Icon.Group>
            }
          </Link>
          {user ?
            <div>
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-account-type">{user.account_type}</p>
            </div> :
            <div>
              <p>User Name</p>
              <p>User Account Type</p>
            </div>
          }
        </div>
        <Segment basic style={{backgroundColor:"#D7272F", color:"white", fontWeight:"bolder"}}>
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon inverted name="user" />
                Name
              </Grid.Column>
              <Grid.Column>
                <Icon inverted name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon inverted name="edit" />
                Edit Bio
              </Grid.Column>
              <Grid.Column >
                <Icon inverted name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon inverted name="chart bar" />
                My Points
              </Grid.Column>
              <Grid.Column >
                <Icon inverted name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon inverted name="map marker alternate" />
                My Location
              </Grid.Column>
              <Grid.Column >
                <Icon inverted name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon inverted name="mail" />
                {user ? <>{user.email}</> : "User Email"}
              </Grid.Column>
              <Grid.Column >
                <Icon inverted name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
        </Segment>
    </div>
  )


}

export default Profile

const BorderlessCard = styled(Card)`
  height: 300px;
  box-shadow: none !important
`