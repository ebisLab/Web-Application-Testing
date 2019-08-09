import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; 
import App from './App';

describe('<App>', () => {
    it('renders without crashing', () => {
        render (<App />);
    });
    it('One big Test', () => {
      const {getByText} = render (<App />);
      const strike = getByText(/^strike$/i);
      const ball = getByText(/^ball$/i);
      const foul = getByText(/^foul$/i);
      const hit = getByText(/^hit$/i);

      //Test that strike works
      fireEvent.click(strike);
      fireEvent.click(strike);
      getByText(/Strikes: 2/);

       //Test that Ball works
       fireEvent.click(ball);
       fireEvent.click(ball);
       fireEvent.click(ball);
       getByText(/Balls: 3/);

      //Testing if tests rolls over 
      fireEvent.click(strike);
      getByText(/Strikes: 0/);
      getByText(/Balls: 0/);

      //Test that foul doesnt increase strikes past 2
      fireEvent.click(strike);
      fireEvent.click(ball);
      fireEvent.click(hit);
      getByText(/Strikes: 0/);
      getByText(/Balls: 0/);

  });
})