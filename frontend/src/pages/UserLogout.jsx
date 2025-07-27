import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import UserLogout from '../context/userContext';

export const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${process.env.VITE_API_URL}/user/logout`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        if(res.status === 200){
            localStorage.removeItem('token');
            navigate('/login');
        }
    })

  return (
    <div>
      UserLogout
    </div>
  )
}

export default UserLogout
