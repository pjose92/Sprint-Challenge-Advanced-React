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

test('Navbar title', async () => {
  const wrapper = rtl.render(<App/>)
  const women = wrapper.getByText(`Women's World Cup Players`)
  
  expect(women).toBeVisible()
})

it('Should have the class of navbar', async () => {
  const wrapper = rtl.render(<Navbar />)
  const element = wrapper.getByTestId("nav-test-id")

  expect(element).toHaveClass('navbar')
})

