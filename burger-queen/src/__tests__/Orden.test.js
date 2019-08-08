import React from 'react';
import { render, fireEvent, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import Orden from '../components/Orden';

it('renders', () => {
    const { asFragment } = render( <Orden/>);
    expect(asFragment()).toMatchSnapshot();
})
it('inserts logo image in <img>', () => {
    const{ getByTestId, getByText} =render (<Orden />)
    expect(getByTestId('new-order-btn')).toHaveClass("btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate");
    expect(getByTestId('order-list-btn')).toHaveClass("btn btn-primary mx-2 px-5 mb-3 mt-3 aos-init aos-animate");
    expect(getByText('Nueva Orden')).toHaveAttribute('type', expect.stringContaining('button'));
})
