import React from 'react';
import ReactDOM from 'react-dom';
//import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  ReactDOM.unmountComponentAtNode(div);
});

test('it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  ReactDOM.unmountComponentAtNode(div);
});
