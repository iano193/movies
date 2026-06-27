import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px auto',
      padding: '15px',
      maxWidth: '600px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px'
    }}>
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ padding: '8px 12px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      
      <input 
        type="number" 
        placeholder="Min Rating (0-10)" 
        min="0"
        max="10"
        step="0.1"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        style={{ padding: '8px 12px', width: '30%', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default Filter;