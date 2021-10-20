import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Grid, Message } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import '../StyleSheets/Login.css'

const Login = () => {
  const { handleLogin, error, setError, setLoading } = useContext(AuthContext)
  const [email, setEmail] = useState('rafabriones88@outlook.com')
  const [password, setPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, history)
  }

  const handleClick = (e, target) => {
    history.push(`${target}`)
    setError(false)
    setLoading(false)
  }

  return (
    <div className="default-page">
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
          <Form warning onSubmit={handleSubmit}>
            <Form.Input
              required
              type="email"
              label="Email"
              icon='red mail'
              iconPosition='left'
              placeholder='E-mail address'
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              required
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
            {error && <Message
              warning
              header='That email is not in our system. Please Sign Up'

              />
            }
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;

