import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DynamicRendering from '../day_3_ce/DynamicRendering';

test('renders DynamicRendering component initially with "Show" button', () => {
    render(<DynamicRendering />);
    const showButton = screen.getByText('Show Component');
    expect(showButton).toBeInTheDocument();
});


test('toggles content when "Show" button is clicked', async () => {
    render(<DynamicRendering />);
    const showButton = screen.getByText('Show Component');

    expect(screen.queryByText(/Hi! How are You!!!/)).toBeNull();

    fireEvent.click(showButton);

    await waitFor(() => {
        expect(screen.getByText(/Hi! How are You!!!/)).toBeInTheDocument();
    });

    fireEvent.click(showButton);

    await waitFor(() => {
        expect(screen.queryByText(/Hi! How are You!!!/)).toBeNull();
    });
});
