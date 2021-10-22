import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Image } from 'semantic-ui-react'
import logo from "../images/burgerlogo.png";
import '../StyleSheets/LandingHome.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="landing">
        <div className="content">
          <div className="logo">
            <Image src={logo} size="small" verticalAlign="middle" />
          </div>
          <hr className="rounded" />
          <div className="tagline">
            WELCOME {user.name}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;