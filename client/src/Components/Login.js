import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Checkbox, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('rafabriones88@outlook.com')
  const [password, setPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, history)
  }

  const handleClick = (e, target) => {
    history.push(`${target}`)
  }

  return (
    <div className="login-page">
      <Grid style={{ height: '54vh' }} centered verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <div className="login-header">
            Welcome to
            <div className="loyal-burger-header">
              LOYAL BURGER
            </div>
          </div>
          <div className="button-group">
            <button className="yellow-button">Login</button>
            <button className="white-button" onClick={(e) => handleClick(e, '/register')}>Sign Up</button>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Email"
              icon='red mail'
              iconPosition='left'
              placeholder='E-mail address'
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              label="Password"
              icon='red lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="remember-forget">
              <label for="remember">
                <input
                  type="checkbox"
                  id="styled-checkbox"
                  name='remember' />
               Remember me?
            </label>
               Forgot password
            </div>
            <div className="buttoncontainer">
              <button
                className="loginbutton" >
                LOGIN
              </button>
            </div>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;

