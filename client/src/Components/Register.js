import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import ErrorMessage from './ErrorMessage';
import '../StyleSheets/Register.css'

const Register = () => {
  const { handleRegister, error, loading, setLoading } = useContext(AuthContext)
  const [name, setName] = useState('Business')
  const [account_type, setAccount_Type] = useState('Business')
  const [email, setEmail] = useState('business@test.com')
  const [password, setPassword] = useState('123456')
  const [passwordConfirmation, setPasswordConfirmation] = useState('123456')
  const history = useHistory()

  const dropOptions = [
    { key: 'business', text: 'Business', value: 'business' },
    { key: 'customer', text: 'Customer', value: 'customer' },
  ]

  const handleChange = (e, { value }) => {
    setAccount_Type(value);
  };

  const handleSubmit = (e) => {
    if (password === passwordConfirmation) {
      e.preventDefault();
      handleRegister({ name, account_type, email, password }, history)
    } else {
      alert('Password does not match')
    }
  }

  const handleClick = (e, target) => {
    history.push(`${target}`)
  }

  return (
    <div className="page WhiteBackG">
      {error && <ErrorMessage header="Could not Register" error={error} />}
      <Grid textAlign='center' style={{ height: '54vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1 id="register-header">
            Register New Profile
          </h1>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                // label="Name"
                required
                fluid icon='red user'
                iconPosition='left'
                placeholder='Name'
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Dropdown
                required
                search selection options={dropOptions} //objects
                placeholder='Account Type'
                // value={account_type}
                onChange={handleChange}
              />
              <Form.Input
                // label="Email"
                required
                fluid icon='red mail'
                iconPosition='left'
                placeholder='E-mail address'
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                // label="Password"
                required
                fluid
                icon='red lock'
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
                icon='red lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
                // value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />

              <button className="register-button">
                  REGISTER
              </button>
            </Segment>
          </Form>
            <button 
              id="yellow-contact-button"
              onClick={(e) => handleClick(e, '/about')}
              >
              Contact Us
            </button>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Register;

