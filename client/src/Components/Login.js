import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
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
  return (
    <Grid style={{ height: '54vh' }} centered verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='left'>
          Welcome
          <br />to Loyalty App
        </Header>
        <Form onSubmit={handleSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              label="Email"
              fluid icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              label="Password"
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button color='blue' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/register'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;

