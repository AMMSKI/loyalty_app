import React, { useContext } from 'react';
import { Card, CardContent, Icon, Image, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { AuthContext } from '../providers/AuthProvider';

const Profile = ( ) => {
  const { user } = useContext(AuthContext)


// When you get a user image replace the link with this: {user.image} 

  return (
    <>
      <BorderlessCard centered>
        <CardContent textAlign="center">
          <Image src="https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png" style={{ width: "120px"}} />
          {user ? 
            <div>
              <p>{user.name}</p>
              {user.account_type}
            </div> : 
            <div>
              <p>User Name</p>
              <p>User Account Type</p>
             </div>
          }
        </CardContent>
        <Segment basic>
          <div>
            <div>
              <Icon color="blue" name="user" />
                Name
                <Icon color="blue" name="angle right"/> 
            </div>
            <hr />
            <div>
              <Icon color="blue" name="edit" />
                Edit
              <Icon color="blue" name="angle right" />
            </div>
            <hr />
            <div>
              <Icon color="blue" name="chart bar" />
                My Points
              <Icon color="blue" name="angle right" />
            </div>
             <hr />
            <div>
              <Icon color="blue" name="map marker alternate" />
                Location
              <Icon color="blue" name="angle right" />
            </div>
            <hr />
            <div>
              <Icon color="blue" name="mail" /> 
              {user ? <>{user.email}</> : "User Email"}
              <Icon color="blue" name="angle right" />
            </div>
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