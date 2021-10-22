import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleRegister = async (user, history) => {
    try {
      setError(null)
      setLoading(true)
      let res = await axios.post('/api/auth', user)
      setUser(res.data.data)
      if(res.data.data.account_type === 'business'){
        history.push('/finish_signup')
      }else{
        history.push('/home')
      }
      console.log("User registered successfully")
    } catch (err) {
      setError(err.response.data.errors ? err.response.data.errors : err.response.data.error)
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  const handleLogin = async (user, history) => {
    try {
      setError(null)
      setLoading(true)
      let res = await axios.post('/api/auth/sign_in', user)
      setUser(res.data.data)
      history.push('/home')
      console.log("User login successfully!")
    } catch (err) {
      setError(err)
      console.log(err)
    }
  };

  const handleUserUpdate = async (user, history) => {
    try {
      setError(null)
      setLoading(true)
      let res = await axios.put('/api/auth', user)
      setUser(res.data.data)
      history.push('/home')
      console.log("User updated successfully")
    } catch (err) {
      setError(err.response.data.errors ? err.response.data.errors : err.response.data)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (history) => {
    try {
      setUser(null)
      localStorage.removeItem('access-token')
      await axios.delete(`/api/users/${user.id}`)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = (history) => {
    setUser(null)
    localStorage.removeItem('access-token')
    history.push('/')
    console.log("User logout successfully!")
  };

  return (
    <AuthContext.Provider value={{
      user,
      error,
      setError,
      setUser,
      handleRegister,
      handleLogin,
      handleLogout,
      handleUserUpdate,
      handleDelete,
      loading,
      setLoading,
      authenticated: user ? true : false
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider