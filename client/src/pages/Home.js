import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  )
}

export default Home