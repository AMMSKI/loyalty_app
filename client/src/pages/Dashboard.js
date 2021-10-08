import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react';
import SearchBar from '../Components/SearchBar';


const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [input, setInput] = useState('');
  const [punchcards, setPunchcards] = useState([])
  const [searchPunchcards, setSearchPunchcards] = useState([])
  
  useEffect(()=>{
    getPunchcards()
  },[])

  const getPunchcards = async()=> {
    try{
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      console.log(res.data)
      setPunchcards(res.data)
      setSearchPunchcards(res.data)
    }catch(err){
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
    try{
      await axios.delete(`/api/users/${user.id}/user_punchcard/${punch_id}`)
      getPunchcards()
    }catch(err){
      console.log(err)
    }
  }

  const renderPunchcards = () => {
    return searchPunchcards.map((p)=>{
      return (
        <div style={{padding:'10px'}}>
          <Card>
            <Card.Body>
          <MyLink to={`/earn/${p.up_id}`} userpunchcard_id={p.up_id}>
          <Card.Title>
          <h1>{p.restaurant_name}</h1>
          </Card.Title>
          <p>{p.punch_descrip}</p>
          <p>You have {p.current_points ? p.current_points : '0'} points</p>
          <p>id: {p.punchcard_id}</p><br/>
          </MyLink>
          <Card.Footer style={{backgroundColor:'#2185D0'}} onClick={()=>deletePunchcard(p.up_id)}><Icon name='trash'/>Remove</Card.Footer>
          </Card.Body>
          </Card>
        </div>
      )
    })
  }


  return (
    <div>
      <h2>Wallet:</h2>
      <SearchBar
        input={input} 
        onChange={updateInput} />
      {punchcards && renderPunchcards()}
    </div>
  )
}

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default Dashboard