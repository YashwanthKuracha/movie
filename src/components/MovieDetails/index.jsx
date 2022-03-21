import React from 'react';
import MovieTitle from './components/MovieTitle';
import Gallery from './components/Gallery';
import Cast from './components/Cast';

const MovieDetails = ({movieDetails, photos, cast}) => {
    return(
        <>
        <MovieTitle {...movieDetails} />
        {photos && <Gallery photos={photos} />}
        <Cast cast={cast} />
    </>
    )
}

export default MovieDetails;