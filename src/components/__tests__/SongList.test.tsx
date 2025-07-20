import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SongList from '../SongList';
import store from '../../redux/store';

test('renders Songs Library heading', () => {
  render(
    <Provider store={store}>
      <SongList />
    </Provider>
  );

  expect(screen.getByText(/Songs Library/i)).toBeInTheDocument();
});
