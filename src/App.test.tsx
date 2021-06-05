import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('starts outside house', () => {
  render(<App />);
  const headerText = screen.getByText(/Outside the House/i);
  expect(headerText).toBeInTheDocument();
});
