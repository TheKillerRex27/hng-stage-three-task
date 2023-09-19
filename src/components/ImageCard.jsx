import React from 'react'
import LoadingOverlay from 'react-loading-overlay-ts'

const ImageCard = (props) => {
    return (
        <>
            <div>
                <img src={props.url} style={{ width: '350px', height: '200px' }} />
                <p>{props.tags}</p>
            </div>
        </>
    )
}

export default ImageCard
