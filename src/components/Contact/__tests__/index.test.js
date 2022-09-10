import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact form is rendering', () => {
    it('renders', () => {
        render(<Contact />);
    });
    it('render snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders Contact me', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });
    it('renders button function', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})