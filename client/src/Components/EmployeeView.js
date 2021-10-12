import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

function EmployeeView(props) {
  const { user } = useContext(AuthContext)
  const [punchcard, setPunchcard] = useState([])

  useEffect(()=> {
    getPunchcards()
  },[])

  const getPunchcards = async () => {
    const punch_id = props.match.params.punch_id
    try {
      let res = await axios.get(`/api/users/${user.id}/employeeview/${punch_id}`)
      setPunchcard(res.data)
    } catch (error) {
      
    }
  }
  
  const renderPunchcards = () => {
  
    return punchcard.map((p)=> {
      return (
        <div>
          <h3>{p.name} : {p.current_points} points</h3>
        </div>

      )
    })

  }

  return (
    <div className="jumbotron text-center">
      <h1>Rewards Card</h1>
      <p>Number of customers: {punchcard.length}</p>
      <Card centered>
          <Card.Content>
            {renderPunchcards()}
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployeeView;