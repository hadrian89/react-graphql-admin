import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app/App';

test('check first div text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});