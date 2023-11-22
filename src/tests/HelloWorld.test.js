import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../day_2_ce/HelloWorld';

test('renders Hello, World! in HelloWorld component', () => {
    render(<HelloWorld />);
    const helloWorldText = screen.getByText('Hello, World!');
    expect(helloWorldText).toBeInTheDocument();
});