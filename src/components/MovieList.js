import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <p style={{ fontSize: '18px', color: '#888', marginTop: '20px' }}>No movies found matching your criteria.</p>
      )}
    </div>
  );
};

export default MovieList;