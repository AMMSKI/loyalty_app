import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Card, Col, Row } from 'react-bootstrap'
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
        <div className='searchCard'>
          <MyCard url={p.logo}>
          {/* <Card> */}
          <MyLink to={`/earn/${p.up_id}`} userpunchcard_id={p.up_id}>
            <Card.Body>
            <Row>
            {/* <Col><Card.Img src={p.logo}/></Col> */}
          <Col className='nameCol1'>
          <Card.Title>
          <h1>{p.restaurant_name}</h1>
          </Card.Title>
          <p>{p.current_points ? p.current_points : '0'} points</p>
          <br/>
          </Col>
          </Row>
          </Card.Body>
          </MyLink>
          <Card.Footer style={{backgroundColor:'#2185D0'}} onClick={()=>deletePunchcard(p.up_id)}><Icon name='trash'/>Remove</Card.Footer>
          {/* </Card> */}
          </MyCard>
        </div>
      )
    })
  }


  return (
    <div>
      <h2>Wallet:</h2>
      <Icon name='search'size='large'/>
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

const MyCard = styled(Card)`
  width: 80vw;
  background-image: url(${props=>props.url});
  background-position: center;
  background-size: cover;
`

export default Dashboard