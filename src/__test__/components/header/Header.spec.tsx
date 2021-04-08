import React from 'react';

import { render, screen } from '@testing-library/react';

import { LogoPng } from '../../../assets/header';
import Header from '../../../components/header/Header';

describe('components/header', () => {
  it(`header has a logo what alt is "secret juju" and src is "LogoPng"`, () => {
    render(<Header />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'secret juju');
    expect(logo).toHaveAttribute('src', LogoPng);
  });
});
