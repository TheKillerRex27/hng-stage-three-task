import React, { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';

const ImageCard = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(simulateLoading);
    };
  }, []);

  return (
    <>
      <div>
        <LoadingOverlay active={loading} spinner text={'Loading...'}>
          <img src={props.url} style={{ width: '350px', height: '200px' }} />
        </LoadingOverlay>
        <p>{props.tags}</p>
      </div>
    </>
  );
};

export default ImageCard;
