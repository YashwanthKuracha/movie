import React from 'react';
import './style.css';

const MovieTitle = ({title, imageURL, imageTitle, description}) => (
    <div className='movieTitleContainer'>
        <h1>{title}</h1>
        <div>
            <div>
                <img src={imageURL} alt="title"/>
            </div>
            <div>
                <h2>{imageTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
)

export default MovieTitle;