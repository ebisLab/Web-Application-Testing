import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

describe('<Display>', () => {
    it('renders without crashing', () => {
        render (<Display />);
    });
    it('props work', () => {
        const display = render (<Display strikes={2} balls={3}/>);
        // const {getByText} = display //display is an object so you can distructure like so
        display.getByText(/Strikes: 2/) //get an element by its text content
        display.getByText(/Balls: 3/)
    });
    it('Component is dumb', () => {
        const display = render (<Display strikes={-2} balls={400}/>);
        // const {getByText} = display //display is an object so you can distructure like so
        display.getByText(/Strikes: -2/) //get an element by its text content
        display.getByText(/Balls: 400/)
    });
})