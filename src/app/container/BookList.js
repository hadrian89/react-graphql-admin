import React from 'react';
import { useQuery, gql } from '@apollo/client';

const BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {data.books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;