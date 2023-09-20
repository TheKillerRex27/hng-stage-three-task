import React, { useState } from 'react'
import PrivateRoute from './PrivateRoute'
import NavbarComponent from './NavbarComponent'
import ImageCard from './ImageCard'
import { Button } from 'react-bootstrap';
import images from '../data/imageData.json'
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredImages = images.filter(image =>
    image.tags.includes(searchQuery)
  );

  return (
    <PrivateRoute>
      <NavbarComponent setSearchQuery={setSearchQuery} />
      <div className='gallery-container px-3 py-4'>
        {!searchQuery ? ( // Use searchQuery to determine whether to display all images or filtered images
          images.map((image) => (
            <ImageCard key={image.id} url={image.url} tags={image.tags.join(', ')} />
          ))
        ) : (
          <>
            <div className='button-container'>
              <Button onClick={() => setSearchQuery('')} style={{ height: '80px', width: '100px' }} >Clear Search</Button>
            </div>
            {filteredImages.map((image) => (
              <ImageCard key={image.id} url={image.url} tags={image.tags.join(', ')} />
            ))}
          </>
        )}
      </div>
    </PrivateRoute>
  )
}

export default Dashboard