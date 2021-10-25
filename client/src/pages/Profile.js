
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { AuthContext } from '../providers/AuthProvider';
import Avatar from 'react-avatar';
import '../StyleSheets/Profile.css'
import ErrorMessage from '../Components/ErrorMessage';
import PunchcardImageUpload from '../Components/PunchcardUpload';

const Profile = () => {
  const { handleUserUpdate, error, loading, user, handleDelete } = useContext(AuthContext)
  const [name, setName] = useState(user.name)
  // const [account_type, setAccount_Type] = useState(user.account_type)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [deleteMessage, setDeleteMessage] = useState(false)
  const history = useHistory();

  const handleSubmit = (e) => {
    if (password === passwordConfirmation) {
      e.preventDefault();
      handleUserUpdate({ name, password }, history)
    } else {
      alert('Password does not match')
    }
  }

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

        <div className="update-user-form">
          {error && 
          <ErrorMessage header="Could not Update" error={error} />}
          <div>
              <Form onSubmit={handleSubmit}>
                <Segment padded>
                  <Form.Input
                    required
                    label="Name"
                    fluid icon='user'
                    iconPosition='left'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Input
                    label="Password"
                    required
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    // value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Input
                    label={"Confirm Password"}
                    required
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password Confirmation'
                    type='password'
                    // value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <div className="up-button-container">
                    <button
                      className="update-profile-button AmaranthRedBackG WhiteFontC"
                    >
                      UPDATE
                    </button>
                  </div>
                </Segment>
              </Form>
          </div>
          <br />
          <br />
          {user.account_type === "business" && <PunchcardImageUpload />}
        </div>
        <button onClick={() => {setDeleteMessage(true)}}>Delete Profile</button>
        {deleteMessage && 
        <div>
          <p>Are you sure you want to delete your account?</p>
          <button onClick={() => handleDelete(history)}>
            Yes
          </button>
        </div>
        }
      </div>
  )


}

export default Profile

const BorderlessCard = styled(Card)`
  height: 300px;
  box-shadow: none !important
`
        {/* <Segment basic style={{ backgroundColor: "#D7272F", color: "white", fontWeight: "bolder" }}>
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
    </div> */}