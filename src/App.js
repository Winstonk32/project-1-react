// src/App.js
import React from 'react';
import List from './components/list';
const App = () => {
  const books = [
    { title: 'It Ends with us', author: 'Collen Hover', year: 2016 },
    { title: 'Fourth Wing', author: 'Rebecca Yarros', year: 2023 },
    { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', year: 2017 },
  ];

  const movies = [
    { title: 'Avengers Endgame', director: 'Russo Brother', year: 2018 },
    { title: 'The Matrix', director: 'The Wachowskis', year: 1999 },
    { title: 'Greatest Showman', director: ' Michael Gracey', year: 2017 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Books & Movies</h1>
      <div className="mb-8">
        <List items={books} type="book" />
      </div>
      <div>
        <List items={movies} type="movie" />
      </div>
    </div>
  );
};

export default App;
