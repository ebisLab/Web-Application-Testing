import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; //cleans up after each test, because not getting double rendering.
import Dashboard from './Dashboard';
import { exportAllDeclaration } from '@babel/types';

describe('<Dashboard>', () => {
    it('renders without crashing', () => {
        render (<Dashboard />);
    });
    it('strike works', () => {
        let clicked = false;
        const {getByText} = render (<Dashboard strike={() => clicked = true}/>);
        const strikeBtn = getByText(/strike/i)
        //Clicking lets us interact with DOM elements
        fireEvent.click(strikeBtn);
        expect(clicked).toBe(true);
    });
    //fake function
    it('strike part Something Frenchy - this is a fake function', () => {
        // let clicked = false;
        const click = jest.fn();

        const {getByText} = render (<Dashboard strike={click}/>);
        const strikeBtn = getByText(/strike/i)
        //Clicking lets us interact with DOM elements
        fireEvent.click(strikeBtn);
        expect(click).toBeCalled();
    });
})