import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; //cleans up after each test, because not getting double rendering.
import Dashboard from './Dashboard';
import { ENETUNREACH } from 'constants';

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