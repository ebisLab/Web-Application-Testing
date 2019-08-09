import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; //cleans up after each test, because not getting double rendering.
import Dashboard from './Dashboard';

describe('<Dashboard>', () => {
    it('renders without crashing', () => {
        render (<Dashboard />);
    });
    it('strike works', () => {
        const {getByText} = render (<Dashboard/>);
        const strikeBtn = getByText(/strike/i)
        //Clicking lets us interact with DOM elements
    });
})