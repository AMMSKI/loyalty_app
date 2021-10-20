import React, { useContext } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { AuthContext } from '../providers/AuthProvider';
import '../StyleSheets/Admin.css'

function Admin(props) {
  const { user } = useContext(AuthContext)

  return (
    <div className="admin-page">
      <div className="jumbotron text-center">
        <div className="avatar-container">
          <Avatar 
            style={{border:"solid 2px black"}}
            size="100" 
            round 
            src={user.image} 
            />
        </div>
        <h2>{user.name}</h2>
        <h6 style={{color: "#F3CA03"}}>{user.account_type}</h6>
      </div>
      <Grid
        color={"white"}
        textAlign='center'
        celled columns='equal'
        style={{ marginTop: "40px" }}>
        <GridRow>
          <Grid.Column>
            <p className="p-admin">12</p>
            Cards
          </Grid.Column>
          <Grid.Column>
            <p className="p-admin">230</p>
            Data
          </Grid.Column>
          <Grid.Column>
            <p className="p-admin">169</p>
            Data
          </Grid.Column>
        </GridRow>
        <GridRow style={{
          height: "300px",
          boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        }}>
          <GridColumn>Need help</GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Admin;
