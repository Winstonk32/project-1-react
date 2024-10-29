// src/components/List.js
import React from 'react';
import BookItem from './Book';
import MovieItem from './movie';


const list = ({ items, type }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 p-30">{type === 'book' ? 'Books' : 'Movies'} List</h2>
      {items.map((item, index) => (
        <div key={index}>
          {type === 'book' ? <BookItem book={item} /> : <MovieItem movie={item} />}
        </div>
      ))}
    </div>
  );
};

export default list;
