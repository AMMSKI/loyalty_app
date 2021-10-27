
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Grid, Icon, Segment } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import Avatar from 'react-avatar';
import '../StyleSheets/Profile.css'
import '../StyleSheets/App.css'
import PunchcardImageUpload from '../Components/PunchcardUpload';

const Profile = () => {
  const { handleUserUpdate, setError, error, user, handleDelete } = useContext(AuthContext)
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [nameForm, setNameForm] = useState(false)
  const [passwordForm, setPasswordForm] = useState(false)
  const [uploadForm, setUploadForm] = useState(false)
  const [deleteForm, setDeleteForm] = useState(false)
  const history = useHistory();

  const handleNameSubmit = (e) => {
      handleUserUpdate({ name }, history)
      setNameForm(!nameForm)
    }
    
    const handlePasswordSubmit = (e) => {
      console.log('its submitting')
      if (password === passwordConfirmation) {
        handleUserUpdate({ password }, history)
        setPasswordForm(!passwordForm)
      } else {
        setError(true)
      }
  }


  return (
    <div className="webview-white-container">
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

          <Segment 
            basic 
            style={{ 
              backgroundColor: "#D7272F", 
              color: "white", 
              fontWeight: "bolder", 
              width:"65%" }}>
              <Grid onClick={()=> {setNameForm(!nameForm)}}>
                <Grid.Column width={13}>
                  <Icon inverted name="user" />
                  Name
                </Grid.Column>
                <Grid.Column>
                  <Icon inverted name="angle right"/>
                </Grid.Column>
              </Grid>
              {nameForm && 
                <Form onSubmit={handleNameSubmit}>
                  <Form.Input
                    required
                    fluid icon='user'
                    iconPosition='left'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form>
                }

                <Grid onClick={()=> {setPasswordForm(!passwordForm)}}>
                  <Grid.Column width={13}>
                    <Icon inverted name="edit" />
                    Password
                  </Grid.Column>
                  <Grid.Column >
                    <Icon inverted name="angle right" />
                  </Grid.Column>
                </Grid>
              {passwordForm && 
                <Form onSubmit={handlePasswordSubmit}>
                  <Form.Input
                  required
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Input
                    required
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password Confirmation'
                    type='password'
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <button className="WhiteBackG password-update AmaranthRedFontC">Change</button>
                </Form>
              }
              {error && 
                <div style={{color:"black"}}>
                Passwords must be at least 6 characters long and match
                </div>
                }


            {user.account_type === "business" && 
            <Grid onClick={()=> {setUploadForm(!uploadForm)}}>
                <Grid.Column width={13}>
                  <Icon inverted name="upload" />
                  Card Image
                </Grid.Column>
                <Grid.Column>
                  <Icon inverted name="angle right"/>
                </Grid.Column>
              </Grid>
              }
              {uploadForm && <PunchcardImageUpload setUploadForm={setUploadForm} uploadForm={uploadForm}/>}
            <br />

            <Grid onClick={()=> {setDeleteForm(!deleteForm)}}>
                <Grid.Column width={13}>
                  <Icon inverted name="delete" />
                  Delete
                </Grid.Column>
                <Grid.Column>
                  <Icon inverted name="angle right"/>
                </Grid.Column>
              </Grid>

              {deleteForm && 
                <div style={{textAlign:"center", marginTop:"8px"}}>
                   <p>Are you sure you want to delete your account?</p>
                  <button 
                    onClick={() => handleDelete(history)}
                    className="BlackBackG WhiteFontC">
                    Delete
                  </button>
                </div> 
                 
              }
                </Segment>
      </div>
    </div>
  )


}

export default Profile
