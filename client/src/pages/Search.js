import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {Card, Icon} from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import MyCard from '../Components/MyCard';
import SearchBar from '../Components/SearchBar';
import SearchCard from '../Components/MyCard';


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
    return searchCards.map((c) => <SearchCard {...c}/>)
  }
  
  return (
    <div className="default-page">
      <div className="search-header">
        <SearchBar
          input={input} 
          onChange={updateInput}
          />
      </div>
      {renderCards()}
    </div>
  )
}

export default Search