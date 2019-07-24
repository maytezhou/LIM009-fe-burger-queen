import React from 'react';
import { render, fireEvent, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import Nav from '../components/Nav';
import  Logo from '../img/logoBq.png';

it('renders', () => {
    const { asFragment } = render( <Nav logo ={Logo} />);
    expect(asFragment()).toMatchSnapshot();
})
it('inserts logo image in <img>', () => {
    const{ getByTestId, getByAltText} =render (<Nav logo={Logo}/>)
    expect(getByTestId('imgLogo')).toHaveClass('center');
    expect(getByAltText('logo')).toHaveAttribute('alt', expect.stringContaining('logo'));
})
