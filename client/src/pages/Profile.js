import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Icon, Image, Menu, Segment, Table } from 'semantic-ui-react';
import styled from 'styled-components';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext)
  console.log(user.image)


  // When you get a user image replace the link with this: {user.image} 

  return (
    <>
      <BorderlessCard centered>
        <CardContent textAlign="center">
          <Link to={`/profileupload/${user.id}`}>
          <Icon.Group size="huge">
            <Icon name="user" color="black"/>
           <Icon link corner name="edit outline"color="black"/>
          </Icon.Group>
          </Link>
          <Image src={user.image} />
          {user ?
            <div>
              <h2 style={{color:"#328FD4", fontWeight:"bold"}}>{user.name}</h2>
              <h6>{user.account_type}</h6>
            </div> :
            <div>
              <p>User Name</p>
              <p>User Account Type</p>
            </div>
          }
        </CardContent>
        <Segment basic padded>
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon color="blue" name="user" />
                Name
              </Grid.Column>
              <Grid.Column>
                <Icon color="blue" name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon color="blue" name="edit" />
                Edit Bio
                </Grid.Column>
              <Grid.Column >
                <Icon color="blue" name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon color="blue" name="chart bar" />
                My Points
                </Grid.Column>
              <Grid.Column >
                <Icon color="blue" name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon color="blue" name="map marker alternate" />
                My Location
                </Grid.Column>
              <Grid.Column >
                <Icon color="blue" name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
          <hr />
          <div>
            <Grid>
              <Grid.Column width={13}>
                <Icon color="blue" name="mail" />
                {user ? <>{user.email}</> : "User Email"}
              </Grid.Column>
              <Grid.Column >
                <Icon color="blue" name="angle right" />
              </Grid.Column>
            </Grid>
          </div>
        </Segment>
      </BorderlessCard>
    </>
  )
}

export default Profile

const BorderlessCard = styled(Card)`
  box-shadow: none !important
`