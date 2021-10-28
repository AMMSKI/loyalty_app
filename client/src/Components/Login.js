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
    <div className="login-page">
      <div className="container-media-query">
        <div className="default-page">
          <Grid centered verticalAlign='middle'>
            <Grid.Column >
              <div className="login-header">
                Welcome to
                <div className="loyal-burger-header">
                  LOYAL BURGER
                </div>
              </div>
              <div className="button-group">
                <button className="yellow-button GoldWebGoldenBackG AmaranthRedFontC">Login</button>
                <button className="white-button" onClick={(e) => handleClick(e, '/register')}>Sign Up</button>
              </div>
              
              <Form 
                onSubmit={handleSubmit}
                >
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
                {/* <div className="remember-forget">
                  <label for="remember">
                    <input
                      type="checkbox"
                      id="styled-checkbox"
                      name='remember' />
                    Remember me?
                  </label>
                  Forgot password
                </div> */}
                {error && 
                <div style={{textAlign:"center"}}>
                  Incorrect email or password.
                </div>}
                <br />
                <div className="buttoncontainer">
                  <button
                    className="loginbutton AmaranthRedBackG WhiteFontC" >
                    LOGIN
                  </button>
                </div>
              </Form>
            </Grid.Column>
          </Grid>
        </div>

      </div>
    </div>
  );
}

export default Login;

