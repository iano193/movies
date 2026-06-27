import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      textAlign: 'left'
    }}>
      <img 
        src={posterURL} 
        alt={title} 
        style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h3 style={{ margin: '10px 0 5px 0' }}>{title}</h3>
      <p style={{ color: '#f39c12', fontWeight: 'bold', margin: '0 0 10px 0' }}>
        ⭐ {rating} / 10
      </p>
      <p style={{ fontSize: '14px', color: '#555', height: '60px', overflow: 'hidden' }}>
        {description}
      </p>
    </div>
  );
};

export default MovieCard;