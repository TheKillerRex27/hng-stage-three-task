import React, { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import '../styles/ImageCard.css'

const ImageCard = (props) => {
  const [loading, setLoading] = useState(true);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  };

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(simulateLoading);
    };
  }, []);

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <LoadingOverlay active={loading} spinner text={'Loading...'}>
          <img src={props.url} style={{ width: '350px', height: '200px' }} />
        </LoadingOverlay>
        <p className='tags'>Tags: {props.tags}</p>
      </div>
    </>
  );
};

export default ImageCard;
