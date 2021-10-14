import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react'


const Landing = () => {
  const history = useHistory()

  return (
    <div>
      <h1> LANDING PAGE </h1>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <p>THE</p>
        <p>LOYALTY</p>
        <p>APP</p>
      </div>
      <div>
        <Button onClick={(e) => history.push('/login')}>SIGN IN</Button>
        <Button onClick={(e) => history.push('/register')}>SIGN UP</Button>
      </div>
    </div>
  )
}

export default Landing;