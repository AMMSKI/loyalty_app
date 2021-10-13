import React from 'react'
import { useHistory } from 'react-router';
import { Button, Card } from 'semantic-ui-react';
import '../StyleSheets/Landing.css'

const Landing = () => {
  const history = useHistory()

  return (
    <div>
      <Card fluid>

        <div>
          <Button onClick={(e) => history.push('/login')}>SIGN IN</Button>
          <Button onClick={(e) => history.push('/register')}>SIGN UP</Button>
        </div>
      </Card>
    </div>
  )
}

export default Landing;