import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Image } from 'semantic-ui-react';
import logotag from "../images/logowtagline.png";
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
            <img 
              src={logotag}
              className="burger-image"/>
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