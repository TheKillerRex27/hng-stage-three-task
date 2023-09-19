import React from 'react'
import PrivateRoute from './PrivateRoute'
import NavbarComponent from './NavbarComponent'
import ImageCard from './ImageCard'
import '../styles/Dashboard.css'

const Dashboard = () => {

  return (
    <PrivateRoute>
      <NavbarComponent />
      <div className='gallery-container px-3 py-4'>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </PrivateRoute>
  )
}

export default Dashboard