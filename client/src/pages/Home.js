import { AuthContext } from '../providers/AuthProvider'
import { useContext } from 'react'
import { Image } from 'semantic-ui-react'
import logo from "../burgerlogo.png"

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
    <div className="landing">
      <div className="content">
        <div className="logo">
          <Image src={logo} size="small" verticalAlign="middle"/>
        </div>
          <hr className="rounded"/>
        <div className="tagline">
          WELCOME
        </div>
      </div>
      </div>
    </>
  )
}

export default Home