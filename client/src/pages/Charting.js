import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory'
import { AuthContext } from "../providers/AuthProvider";

function Charting(props) {
  const {user} = useContext(AuthContext)
  const [restaurant, setRestaurant ] = useState([])
  const [cards, setCards ] = useState([])
  const [customers, setCustomers ] = useState([])


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

  console.log(cards)

  // const toIntegers = () => {
    
  //   setCards(newArr)
  // }

  const array = [2,3,4,4,6,7,7,8,8,8,9,9,9,9,10,10,10,11,11,11,11,11,12,12]

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
    
    // console.log("newArray:", cards)

  return (
    <div className="default-page">
      <h1>Charts</h1>
      <VictoryChart
        domainPadding={20}
        >      
        <VictoryLabel
        x={225}
        y={25}
        textAnchor="middle"
        text="Cards Created Each Month"
        />
        <VictoryAxis 
        tickValues={["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]}
        />
        <VictoryAxis 
        dependentAxis
        />
        <VictoryBar
        data={chartData(cards)}
        x="month"
        y="cards"
        />
      </VictoryChart>

    </div>
  );
}

export default Charting;