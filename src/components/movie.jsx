
import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-blue-100 shadow-md p-4 mb-4 border rounded-lg">
      <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
      <p className="text-gray-600">Director: {movie.director}</p>
      <p className="text-gray-600">Year: {movie.year}</p>
    </div>
  );
};

export default MovieItem;
