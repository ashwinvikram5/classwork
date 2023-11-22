import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductListComponent from '../day_6_ce/ProductListComponent';
import { WithProductList } from '../day_6_ce/WithProductList';

const mockProductList = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
];

test('renders ProductListComponent with given product list', () => {
    render(<ProductListComponent productList={mockProductList} />);

    mockProductList.forEach(({ name, price }) => {
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(new RegExp(price, 'i'))).toBeInTheDocument();
    });

    const productElements = screen.getAllByRole('img');
    expect(productElements).toHaveLength(mockProductList.length);
});

test('renders WrappedComponent with productList prop', () => {
    const WrappedComponent = WithProductList(ProductListComponent, mockProductList);
    render(<WrappedComponent />);

    mockProductList.forEach(({ name, price }) => {
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(new RegExp(price, 'i'))).toBeInTheDocument();
    });

    const productElements = screen.getAllByRole('img');
    expect(productElements).toHaveLength(mockProductList.length);
});