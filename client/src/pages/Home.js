import React from 'react'
import { Image } from 'semantic-ui-react'
import logo from "../burgerlogo.png"

const Home = () => {

  return (
    <div className="landing">
      <div className="content">
        <div className="logo">
          <Image src={logo} size="small" verticalAlign="middle" />
        </div>
        <hr className="rounded" />
        <div className="tagline">
          WELCOME
        </div>
      </div>
    </div>
  )
}



export default Home