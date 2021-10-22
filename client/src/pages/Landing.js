import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Image } from 'semantic-ui-react';
import logo from "../images/burgerlogo.png";
import { AuthContext } from '../providers/AuthProvider';
import '../StyleSheets/LandingHome.css';
import Home from './Home';


const Landing = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext)

  if(user){
    return (
      <Home />
    )
  }else{
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
}

export default Landing;