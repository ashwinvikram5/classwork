/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import InlineStyling from '../day_2_ce/InlineStyling';

test('renders InlineStyling component with inline styles applied', () => {
    render(<InlineStyling />);

    const headingElement = screen.getByText('Inline Style in JSX Example.');
    const paragraphElement = screen.getByText('This is a paragraph with inline styles applied.');

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();

    const divElement = screen.getByText('This is a paragraph with inline styles applied.').parentElement;
    expect(divElement).toHaveStyle({
        backgroundColor: 'lightblue',
        color: 'darkblue',
        padding: '10px',
        border: '1px solid blue',
        borderRadius: '5px',
    });

    const paragraphStyle = window.getComputedStyle(paragraphElement);
    expect(paragraphStyle.color).toBe('darkblue');
    expect(paragraphStyle.fontSize).toBe('16px');
});