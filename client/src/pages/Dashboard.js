import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import SearchBar from '../Components/SearchBar';
import WalletCard from '../Components/WalletCard';
import '../StyleSheets/Dashboard.css'
import redrewards from "../images/11.png"


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
    return searchPunchcards.map((p) =>
      <WalletCard
        p={p}
        deletePunchcard={deletePunchcard} />)
  }


  return (
    <div className="wallet-page AmaranthRedBackG">
      <div className="container-md-query-dash">
        <div className="search-container">
          <img className="dash-header" src={redrewards} />
          <SearchBar
            input={input}
            onChange={updateInput}
          />
          </div>
          <br />
          <div className='punchContainer'>
            {punchcards && renderPunchcards()}
          </div>
      </div>
    </div>
  )
}

export default Dashboard