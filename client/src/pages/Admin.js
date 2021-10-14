import React, { useContext } from 'react';
import { Card, CardGroup, Grid, GridColumn, GridRow, Header, Segment } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { AuthContext } from '../providers/AuthProvider';

function Admin(props) {
  const { user } = useContext(AuthContext)

  return (
    <div style={{padding:"10px"}}>
      <div className="jumbotron text-center">
      <Avatar size="100" style={{border:"solid 1px lightgray"}} round src={user.image}/> 
      <h1>{user.name}</h1>
      <p>{user.account_type}</p>
      </div>
      <Grid textAlign='center' celled columns='equal'>
        <GridRow>
        <Grid.Column>
          Cards
        </Grid.Column>
        <Grid.Column>
          Data
        </Grid.Column>
        <Grid.Column>
          Data
        </Grid.Column>
      </GridRow>
      <GridRow style={{height:"250px"}}>
        <GridColumn>Need help</GridColumn>
      </GridRow>
    </Grid>
    </div>
  );
}

export default Admin;

