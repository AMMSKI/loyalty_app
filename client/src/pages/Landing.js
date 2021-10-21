import React from 'react';
import { useHistory } from 'react-router';
import { Image } from 'semantic-ui-react';
import logo from "../burgerlogo.png";
import '../StyleSheets/LandingHome.css';


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
          <button className="loginbutton AmaranthRedBackG WhiteFontC" onClick={(e) => history.push('/login')}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;