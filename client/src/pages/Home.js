import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Image } from 'semantic-ui-react'
import logo from "../images/1.png";
import '../StyleSheets/LandingHome.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="landing">
        <div className="content">
          <div className="logo">
            <Image src={logo} size="medium" verticalAlign="middle" />
          </div>
          <div className="tagline">
            Welcome {user.name}!
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;