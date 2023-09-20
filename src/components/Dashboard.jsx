import React, { useState } from 'react'
import PrivateRoute from './PrivateRoute'
import NavbarComponent from './NavbarComponent'
import ImageCard from './ImageCard'
import { Button } from 'react-bootstrap';
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import images from '../data/imageData.json'
import '../styles/Dashboard.css'

const Dashboard = (props) => {
  const [imagesArr, setImagesArr] = useState(images)
  const [searchQuery, setSearchQuery] = useState('')

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  )

  const filteredImages = images.filter(image =>
    image.tags.includes(searchQuery)
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    
    let draggedItem = imagesArr.find(image => image.id === active.id)
    let draggedOverItem = imagesArr.find(image => image.id === over.id)

    if (draggedItem !== draggedOverItem) {
      setImagesArr((item) => {
        const oldIndex = item.indexOf(draggedItem);
        const newIndex = item.indexOf(draggedOverItem);

        return arrayMove(item, oldIndex, newIndex);
      });
    }
  }

  return (
    <PrivateRoute>
      <NavbarComponent setSearchQuery={setSearchQuery} />
      <DndContext 
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={imagesArr}>
          <div className='gallery-container px-3 py-4'>
            {!searchQuery ? (
              imagesArr.map((image) => (
                <ImageCard 
                  key={image.id}
                  id={image.id} 
                  url={image.url} 
                  tags={image.tags.join(', ')} 
                />
              ))
            ) : (
              <>
                <div className='button-container'>
                  <Button onClick={() => setSearchQuery('')} style={{ height: '80px', width: '100px' }} >Clear Search</Button>
                </div>
                {filteredImages.length !== 0 ? (
                  filteredImages.map((image) => (
                    <ImageCard
                      key={image.id}
                      url={image.url}
                      tags={image.tags.join(', ')}
                    />
                  ))
                ) : (
                  <p>No Images Found</p>
                )}
              </>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </PrivateRoute>
  )
}

export default Dashboard