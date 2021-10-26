import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory'
import { AuthContext } from "../providers/AuthProvider";
import '../StyleSheets/Charting.css'

function Charting(props) {
  const {user} = useContext(AuthContext)
  const [cards, setCards ] = useState([])


  useEffect(()=>{
    getCards()
  },[])
  
  const getCards = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/carddata`)
      setCards(normalizeCards(res.data))
    } catch (error) {
    }
  }

  const normalizeCards = (cards) => {
    const cardArray = cards.map((c)=> {
    const fullDate = c.created_at
    const splitUp = fullDate.split('-')
    const month = splitUp[1]
    return month
    })
    return cardArray.map((i)=> Number(i))
  }

  console.log(cards.length)

  const chartData = (arr) => {
    const data = [
      {month: 1, cards: 0},
      {month: 2, cards: 0},
      {month: 3, cards: 0},
      {month: 4, cards: 0},
      {month: 5, cards: 0},
      {month: 6, cards: 0},
      {month: 7, cards: 0},
      {month: 8, cards: 0},
      {month: 9, cards: 0},
      {month: 10, cards: 0},
      {month: 11, cards: 0},
      {month: 12, cards: 0},
    ]
      arr.forEach((num) => {
        data.forEach((pair, i) => {
          if (pair.month === num) pair.cards++  
        })
      })
      return data
    }
    
  return (
    <div>
      <div id="chart">
        <VictoryChart>      
          <VictoryLabel
          x={225}
          y={25}
          textAnchor="middle"
          text="Cards Opened Each Month"
          />
          <VictoryAxis 
          tickValues={["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]}
          />
          <VictoryAxis 
          dependentAxis
          />
          <VictoryBar
          data={cards.length === 0 ? 0 : chartData(cards)}
          x="month"
          y="cards"
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default Charting;