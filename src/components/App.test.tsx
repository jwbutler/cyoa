import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const scenes = [
  {
    id: 'outside_house',
    name: 'Outside the House',
    actions: []
  }
];

const state = {
  sceneId: 'outside_house',
  inventory: [],
  visited: []
};

test('starts outside house', () => {
  render(<App initialState={state} scenes={scenes} />);
  const headerText = screen.getByText(/Outside the House/i);
  expect(headerText).toBeInTheDocument();
});
