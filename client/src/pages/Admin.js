import React, { useContext } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { AuthContext } from '../providers/AuthProvider';
import styled from 'styled-components';

function Admin(props) {
  const { user } = useContext(AuthContext)

  return (
    <div style={{padding:"10px"}}>
      <div className="jumbotron text-center">
        <div style={{padding:"8px"}}>
          <Avatar size="100" style={{border:"solid 1px lightgray"}} round src={user.image}/> 
        </div>
        <h2 style={{color:"#328FD4", fontWeight:"bold"}}>{user.name}</h2>
        <h6>{user.account_type}</h6>
      </div>
        <Grid textAlign='center' celled columns='equal' style={{marginTop:"40px"}}>
          <GridRow style={styles.stretched}>
            <Grid.Column>
              <p style={styles.p}>12</p>
              Cards
            </Grid.Column>
            <Grid.Column>
              <p style={styles.p}>230</p>
              Data
            </Grid.Column>
            <Grid.Column>
              <p style={styles.p}>169</p>
              Data
            </Grid.Column>
          </GridRow>
          <GridRow style={{height:"250px", boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
            <GridColumn>Need help</GridColumn>
          </GridRow>
       </Grid>
    </div>
  );
}

export default Admin;

const styles = {
  p: {
    color: "#328FD4",
    fontWeight: "bold",
  }
}