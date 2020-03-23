import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Players from './components/Players'
import Navbar from './components/Navbar'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  
});

test('Player', async () => {
  const wrapper = rtl.render(<Players/>);
  const players = wrapper.getByText(/players/i);
  
  expect(players).toBeVisible()
})



