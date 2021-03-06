import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Grid, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import '../StyleSheets/Register.css'

const Register = () => {
  const { handleRegister, error, setError  } = useContext(AuthContext)
  
  const [name, setName] = useState('customer')
  const [account_type, setAccount_Type] = useState('customer')
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
      console.log(error)
      setError(true)
    }
  }

  const handleClick = (e, target) => {
    history.push(`${target}`)
  }

  return (
    <div className="register-page WhiteBackG">
      <div className="default-regpage">
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 430 }}>
            <h1 id="register-header">
              Register New Profile
            </h1>
            <Form size='large' onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  required
                  fluid icon='red user'
                  iconPosition='left'
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                  />
                <Form.Dropdown
                  required
                  fluid
                  selection
                  search options={dropOptions} //objects
                  placeholder='Account Type'
                  onChange={handleChange}
                  />
                <Form.Input
                  required
                  type='email'
                  fluid icon='red mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <Form.Input
                  required
                  fluid
                  icon='red lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <Form.Input
                  required
                  fluid
                  icon='red lock'
                  iconPosition='left'
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  {error && 
                    "Check to make sure email is good and that passwords match and are at least 6 characters long."}
                <button className="register-button">
                  REGISTER
                </button>
              </Segment>
            </Form>
            <button
              id="yellow-contact-button"
              onClick={(e) => handleClick(e, '/about')}
            >
              About Us
            </button>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Register;

