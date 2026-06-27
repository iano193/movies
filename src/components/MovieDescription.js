import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the specific movie matching the ID parameter from the URL
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Movie not found!</h2>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer', backgroundColor: '#34495e', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
      >
        ⬅️ Back to Home
      </button>

      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ marginBottom: '10px' }}>{movie.title}</h1>
        <p style={{ color: '#f39c12', fontWeight: 'bold', fontSize: '18px', margin: '0 0 20px 0' }}>⭐ {movie.rating} / 10</p>
        
        <h3>Synopsis:</h3>
        <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>{movie.description}</p>

        <h3>Official Trailer:</h3>
        {/* Responsive Trailer Iframe */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
          <iframe
            title={`${movie.title} trailer`}
            src={movie.trailerURL}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;