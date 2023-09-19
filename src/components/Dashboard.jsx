import React from 'react'
import PrivateRoute from './PrivateRoute'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import ImageCard from './ImageCard'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleClick = () => {
      auth.signOut()
      navigate('/login')
  }

  return (
    <PrivateRoute>
      <ImageCard />
      <button onClick={handleClick}>Log Out</button>
    </PrivateRoute>
  )
}

export default Dashboard