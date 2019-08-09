import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard>', () => {
    it('renders without crashing', () => {
        render (<Dashboard />);
    });
    it('strike work', () => {
        const {getByText} = render (<Dashboard/>);
        // const {getByText} = display //display is an object so you can distructure like so
        getByText(/strike/i)
    });
})