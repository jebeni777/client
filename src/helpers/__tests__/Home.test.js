import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../containers/Home';

describe('this is a test', () => {
    // this is where your tests go
    const setUp = render(<Home />)
    it('this is an individual test', () => {
        // this is the code for our individual test
        // such as make sure the "Choose an ailment..." button displays

    })
})