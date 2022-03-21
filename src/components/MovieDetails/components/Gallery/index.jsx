import React from 'react';
import './style.css';

const Gallery = ({photos}) => (
    <div className='gallery'>
        {
            photos?.map((photo, index) => <div key={index} className="photo"><img src={photo.url} alt="snaps" /></div>)
        }
    </div>
)

export default Gallery;