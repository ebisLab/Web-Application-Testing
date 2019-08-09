import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; //cleans up after each test, because not getting double rendering.
import Dashboard from './Dashboard';

describe('<Dashboard>', () => {
    it('renders without crashing', () => {
        render (<Dashboard />);
    });
    it('strike works', () => {
        let clicked = false;
        const {getByText} = render (<Dashboard strike={() => clicked = true}/>);
        const strikeBtn = getByText(/strike/i) // i = case insensitivity 
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
    it('Ball - this is a fake function', () => {
        const click = jest.fn();
        const {getByText} = render (<Dashboard ball={click}/>);
        const ballBtn = getByText(/ball/i)
        fireEvent.click(ballBtn);
        expect(click).toBeCalled();
    });
    it('Foul - this is a fake function', () => {
        const click = jest.fn();
        const {getByText} = render (<Dashboard foul={click}/>);
        const foulBtn = getByText(/foul/i)
        fireEvent.click(foulBtn);
        expect(click).toBeCalled();
    });
    it('Hit - this is a fake function', () => {
        const click = jest.fn();
        const {getByText} = render (<Dashboard hit={click}/>);
        const hitBtn = getByText(/hit/i)
        fireEvent.click(hitBtn);
        expect(click).toBeCalled();
    });
})