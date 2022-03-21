import React from 'react';
import './style.css';

const CastTile = ({name, characterName, profileURL}) => (
    <div className='castTileContainer'>
        <div className='pic'>
            <img src={profileURL} alt="cast" />
        </div>
        <div>
            <h3>
                {name}
            </h3>
            <p>
                {characterName}
            </p>
        </div>
    </div>
)

export default CastTile;