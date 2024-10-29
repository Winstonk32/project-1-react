
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="bg-red-100 shadow-md p-4 mb-4 border rounded-lg">
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-gray-600">Year: {book.year}</p>
    </div>
  );
};

export default BookItem;
