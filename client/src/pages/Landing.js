import React from 'react';
import { useHistory } from 'react-router';
import '../StyleSheets/Landing.css';
import { Image } from 'semantic-ui-react';
import '../StyleSheets/App.css';
import logo from "../burgerlogo.png";


const Landing = () => {
  const history = useHistory()

  return (
    <div>
      <div className="landing">
        <div className="content">
          <div className="logo">
            <Image src={logo} size="small" verticalAlign="middle" />
          </div>
          <hr className="rounded" />
          <div className="tagline">
            EARN REWARDS, EAT BURGERS...
            <br /><br />
            OR SOMETHING ELSE
          </div>
        </div>
        <div className="buttoncontainer">
          <button className="loginbutton" onClick={(e) => history.push('/login')}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;