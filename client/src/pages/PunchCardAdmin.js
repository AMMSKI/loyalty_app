import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider'

const PunchCardAdmin = (props) => {
  const { user } = useContext(AuthContext)
  console.log(props)
  const customer_id = props.match.params.user_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const [currentPoints, setCurrentPoints] = useState(null)

  useEffect(()=>{
    getUserPunchCard()
  },[])

  const getUserPunchCard = async () => {
    try{
      let res = await axios.get(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`)
      console.log(res.data.current_points)
      setCurrentPoints(res.data.current_points)
    }catch(err){
      console.log(err)
    }
  }

  const updatePoints = async (newPoints) => {
    const points = newPoints + currentPoints
    try{
      let res = await axios.put(`/api/users/${customer_id}/user_punchcard/${userpunchcard_id}`, {current_points:points})
      console.log(res)
      setCurrentPoints(points)
      alert(`${newPoints} points added to user card`)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="jumbotron text-center">
      <Card>
      <Card.Body>
        <Row>
          <Col>
            <Button onClick={()=>updatePoints(5)}>Add 5 points</Button>
          </Col>
          <Col>
            <Button onClick={()=>updatePoints(10)}>Add 10 points</Button>
          </Col>
          <Col>
            <Button onClick={()=>updatePoints(15)}>Add 15 points</Button>
          </Col>
        </Row>
      </Card.Body>
      </Card>
    </div>
  )
}

export default PunchCardAdmin