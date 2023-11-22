import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ErrorBoundary from '../day_5_ce/ErrorBoundary';
import List from '../day_5_ce/List';

describe('ErrorBoundary component', () => {
    it('renders without crashing', () => {
        render(
            <ErrorBoundary>
                <div>Test children</div>
            </ErrorBoundary>
        );
        expect(document.body).toBeDefined();
    });

    it('renders children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div>Test children</div>
            </ErrorBoundary>
        );
        expect(screen.getByText('Test children')).toBeInTheDocument();
    });
});

describe('List component', () => {
    it('renders without crashing', () => {
        render(<List />);
        expect(document.body).toBeDefined();
    });

    it('throws an error in componentDidUpdate', () => {
        const list = new List();
        expect(() => list.componentDidUpdate()).toThrowError(
            'An error occurred in List component'
        );
    });

    it('renders the List component inside ErrorBoundary', () => {
        render(<List />);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(5);
    });
});