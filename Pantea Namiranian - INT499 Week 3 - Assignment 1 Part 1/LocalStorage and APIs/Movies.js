import React, { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0a42468583efb5d05a623adcfb70c145&query=${searchTerm}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
