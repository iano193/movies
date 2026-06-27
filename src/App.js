import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDescription from './components/MovieDescription';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/8hP9D6kZseM" // Must use /embed/ format
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival on an alien frontier.",
      posterURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
      rating: 8.7,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPoster, setNewPoster] = useState('');
  const [newRating, setNewRating] = useState('');
  const [newTrailer, setNewTrailer] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription || !newPoster || !newRating || !newTrailer) {
      alert("Please fill out all fields!");
      return;
    }

    const baseNewMovie = {
      id: Date.now(), // Generate unique ID
      title: newTitle,
      description: newDescription,
      posterURL: newPoster,
      rating: parseFloat(newRating),
      trailerURL: newTrailer.replace("watch?v=", "embed/") // Auto format link structure
    };

    setMovies([...movies, baseNewMovie]);
    
    setNewTitle('');
    setNewDescription('');
    setNewPoster('');
    setNewRating('');
    setNewTrailer('');
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter === '' || movie.rating >= parseFloat(ratingFilter);
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px' }}>
        
        <Routes>
          {/* Main Home Dashboard Route */}
          <Route path="/" element={
            <>
              <h1 style={{ textAlign: 'center', color: '#333' }}>🎬 Movie Watchlist Dashboard</h1>
              <Filter titleFilter={titleFilter} setTitleFilter={setTitleFilter} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} />
              
              <form onSubmit={handleAddMovie} style={formStyle}>
                <h3>✨ Add a New Movie</h3>
                <input type="text" placeholder="Movie Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={inputStyle} />
                <input type="text" placeholder="Poster Image URL" value={newPoster} onChange={e => setNewPoster(e.target.value)} style={inputStyle} />
                <input type="number" placeholder="Rating (0-10)" min="0" max="10" step="0.1" value={newRating} onChange={e => setNewRating(e.target.value)} style={inputStyle} />
                <input type="text" placeholder="YouTube Embed Trailer URL" value={newTrailer} onChange={e => setNewTrailer(e.target.value)} style={inputStyle} />
                <textarea placeholder="Plot Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} style={{ ...inputStyle, height: '60px', resize: 'none' }} />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Save Movie
                </button>
              </form>

              <MovieList movies={filteredMovies} />
            </>
          } />

          {/* Individual Detailed Movie Card View Page */}
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>

      </div>
    </Router>
  );
}

const inputStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const formStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

export default App;