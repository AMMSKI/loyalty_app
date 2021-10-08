import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

function EmployeeView(props) {
  const { user } = useContext(AuthContext)
  const [points, setPoints] = useState([])

  useEffect(()=> {
    getPoints()
  },[])

  const getPoints = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/employee`)
      console.log(res.data)
    } catch (error) {
      
    }
  }

  return (
    <div className="jumbotron text-center">
      <h1>View Users</h1>
      <h3>and their current points on their various punchcards</h3>
    </div>
  );
}

export default EmployeeView;