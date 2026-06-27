import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
      rating: 8.8
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space to save humanity.",
      posterURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
      rating: 8.7
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPoster, setNewPoster] = useState('');
  const [newRating, setNewRating] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription || !newPoster || !newRating) {
      alert("Please fill out all fields!");
      return;
    }

    const baseNewMovie = {
      title: newTitle,
      description: newDescription,
      posterURL: newPoster,
      rating: parseFloat(newRating)
    };

    setMovies([...movies, baseNewMovie]);
    
    setNewTitle('');
    setNewDescription('');
    setNewPoster('');
    setNewRating('');
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter === '' || movie.rating >= parseFloat(ratingFilter);
    return matchesTitle && matchesRating;
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🎬 Movie Watchlist Dashboard</h1>
      
      <Filter 
        titleFilter={titleFilter} 
        setTitleFilter={setTitleFilter} 
        ratingFilter={ratingFilter} 
        setRatingFilter={setRatingFilter} 
      />

      <form onSubmit={handleAddMovie} style={{
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <h3>✨ Add a New Movie</h3>
        <input type="text" placeholder="Movie Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Poster Image URL" value={newPoster} onChange={e => setNewPoster(e.target.value)} style={inputStyle} />
        <input type="number" placeholder="Rating (0-10)" min="0" max="10" step="0.1" value={newRating} onChange={e => setNewRating(e.target.value)} style={inputStyle} />
        <textarea placeholder="Plot Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} style={{ ...inputStyle, height: '60px', resize: 'none' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Save Movie
        </button>
      </form>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

const inputStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

export default App;