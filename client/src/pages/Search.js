import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import MyCard from '../Components/MyCard';
import SearchBar from '../Components/SearchBar';
import ShowQR from './ShowQR'


const Search = () => {
  const [input, setInput] = useState('');
  const [cards, setCards] = useState([])
  const [searchCards, setSearchCards] = useState([])

  useEffect(()=>{
    getCards()
  },[])
  
  const getCards = async()=>{
    try{
      let res = await axios.get('/api/punchcards/all')
      setCards(res.data)
      setSearchCards(res.data)
      console.log('all cards',res.data)
    }catch(err){
      console.log(err)
    }
  }

  const updateInput = async (input) => {
    const filtered = cards.filter(c => {
     return c.restaurant_name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setSearchCards(filtered);
 }
  
  const renderCards = () => {
    return searchCards.map((c) => <MyCard {...c}/>)
  }

  return (
    <div>
      <h1>Search</h1>
      <SearchBar
        input={input} 
        onChange={updateInput}
       />
      {renderCards()}
    </div>
  )
}

export default Search