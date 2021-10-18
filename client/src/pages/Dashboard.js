import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Icon, Segment } from 'semantic-ui-react';
import SearchBar from '../Components/SearchBar';
import WalletCard from '../Components/WalletCard';
import '../StyleSheets/App.css'


const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [input, setInput] = useState('');
  const [punchcards, setPunchcards] = useState([])
  const [searchPunchcards, setSearchPunchcards] = useState([])

  useEffect(() => {
    getPunchcards()
  }, [])

  const getPunchcards = async () => {
    try {
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      setPunchcards(res.data)
      setSearchPunchcards(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const updateInput = async (input) => {
    const filtered = punchcards.filter(c => {
      return c.restaurant_name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setSearchPunchcards(filtered);
  }

  const deletePunchcard = async (punch_id) => {
    try {
      await axios.delete(`/api/users/${user.id}/user_punchcard/${punch_id}`)
      getPunchcards()
    } catch (err) {
      console.log(err)
    }
  }


  const renderPunchcards = () => {
    return searchPunchcards.map((p) => <WalletCard p={p} deletePunchcard={deletePunchcard} />)
  }


  return (
    <div className="wallet-page">
      <div className="wallet-header">
        <h1>LOYAL REWARDS</h1>
        <SearchBar
          input={input}
          onChange={updateInput}
        />
      </div>
      {punchcards && renderPunchcards()}
    </div>
  )
}

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const MyCard = styled(Card)`
  width: 80vw;
  height: 20vh;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`

const MyDropdown = styled(Dropdown)`
  color: white;
`

export default Dashboard