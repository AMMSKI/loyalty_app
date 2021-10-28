import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import logo from "../images/1.png";
import '../StyleSheets/LandingHome.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="landing">
        <div className="content">
          <div className="logo">
            <img 
              className="home-burger" 
              src={logo}  
              />
          </div>
          <div className="tagline">
            Welcome {user.name}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;