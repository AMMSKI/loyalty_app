import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import ErrorMessage from './ErrorMessage';
import PunchcardImageUpload from './PunchcardUpload';
import '../StyleSheets/EditUser.css'

export default function EditUser() {
  const { handleUserUpdate, error, loading, user } = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  // const [account_type, setAccount_Type] = useState(user.account_type)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
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
    <div className="edit-user-page">
      {error && <ErrorMessage header="Could not Update" error={error} />}
      <Grid textAlign='center' style={{ height: '54vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" mini textAlign='center' style={{color:"#D7272F"}}>
            Update profile
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment padded>
              <Form.Input
                required
                // label="Name"
                fluid icon='user'
                iconPosition='left'
                // placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* <Form.Input
                // label="Account Type"
                fluid icon='building'
                iconPosition='left'
                // placeholder='Account Type'
                value={account_type}
                onChange={(e) => setAccount_Type(e.target.value)}
              /> */}
              <Form.Input
                // label="Password"
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
                // label={"Confirm Password"}
                required
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
                // value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <button
                className="update-profile-button"
                >
                UPDATE
              </button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      { user.account_type = "business" && <PunchcardImageUpload />}
    </div>
  )
}
