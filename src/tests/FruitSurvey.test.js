/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FruitSurvey from '../day_4_ce/FruitSurvey';

describe('FruitSurvey component', () => {
    test('submits the form with user input', async () => {
        render(<FruitSurvey />);
        const nameInput = screen.getByTestId('name');
        const submitButton = screen.getByTestId('button');

        act(() => {
            userEvent.type(nameInput, 'John');
        });

        act(() => {
            userEvent.click(submitButton);
        });

    });
});

describe('App component', () => {
    it('renders the FruitSurvey component within App', () => {
        render(<FruitSurvey />);
        expect(screen.getByTestId('name')).toBeInTheDocument();
        expect(screen.getByTestId('autocomplete')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });
});