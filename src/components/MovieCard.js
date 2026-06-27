import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;
  
  return (
    // Wrap the card in a Link tag pointing to the specific movie's ID
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '15px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img 
          src={posterURL} 
          alt={title} 
          style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '4px' }} 
        />
        <h3 style={{ margin: '10px 0 5px 0' }}>{title}</h3>
        <p style={{ color: '#f39c12', fontWeight: 'bold', margin: '0 0 10px 0' }}>
          ⭐ {rating} / 10
        </p>
        <p style={{ fontSize: '14px', color: '#555', height: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;