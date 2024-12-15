import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_BOOK_MUTATIONOld = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
const ADD_BOOK_MUTATION = gql`
  mutation AddBook($category: String!, $description: String!) {
    addBook(category: $category, description: $description) {
       category: String!
    description: String!
    }
  }
`;

const AddBook = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    variables: {
      category: category,
      description: description
    },
    refetchQueries: ['GetBooks']
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook();
    setCategory('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Title:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;