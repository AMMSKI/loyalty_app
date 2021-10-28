import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import MyCard from '../Components/MyCard';
import SearchBar from '../Components/SearchBar';
import SearchCard from '../Components/MyCard';
import '../StyleSheets/Search.css'
import pick from "../images/12.png"
import blackpick from "../images/12black.png"


const Search = () => {
  const [input, setInput] = useState('');
  const [cards, setCards] = useState([])
  const [searchCards, setSearchCards] = useState([])

  useEffect(() => {
    getCards()
    window.scrollTo(0, 0)
  }, [])

  const getCards = async () => {
    try {
      let res = await axios.get('/api/punchcards/all')
      setCards(res.data)
      setSearchCards(res.data)
    } catch (err) {
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
    return searchCards.map((c) => <SearchCard {...c} />)
  }

  return (
    <div className="search-page AmaranthRedBackG">
      <div className="container-md-query-search">
        <div className="search-container">
        <img className="search-header" src={pick} />
        <img className="search-header2" src={blackpick} />
          <SearchBar
            input={input}
            onChange={updateInput}
          />
          <br />
          <div className="card-container">
            {renderCards()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search