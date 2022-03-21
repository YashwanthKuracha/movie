import React from 'react';
import CastTile from './components/CastTile';

const Cast = ({cast}) => (
    <>
        {
            cast?.map((item, index) => <CastTile {...item} key={index} />)
        }
    </>
)

export default Cast;

//Proptype.Array({
//Proptype.shape({
 //   name: Proptype.String, characterName: Proptype.String, profileURL: Proptype.String
//})
//})