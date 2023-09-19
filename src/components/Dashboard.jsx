import React from 'react'
import PrivateRoute from './PrivateRoute'
import NavbarComponent from './NavbarComponent'
import ImageCard from './ImageCard'
import '../styles/Dashboard.css'
import images from '../data/imageData.json'

const Dashboard = () => {

  return (
    <PrivateRoute>
      <NavbarComponent />
      <div className='gallery-container px-3 py-4'>
        { images.map((image) => (
          <ImageCard key={image.id} url={image.url} tags={image.tags.join(', ')} />
        )) }
      </div>
    </PrivateRoute>
  )
}

export default Dashboard