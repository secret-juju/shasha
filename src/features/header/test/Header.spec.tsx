import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { HeaderTestInitialPropsType } from '../HeaderType';

import { LogoPng } from '../../../assets/header';

import Header from '../Header';

describe('components/header', () => {
  const onAuthButtonClickMock = jest.fn();

  const setUp = (initialProps: HeaderTestInitialPropsType = {}) => {
    const defaultProps = Object.assign(
      {
        isLoginNow: true,
        onAuthButtonClick: onAuthButtonClickMock,
      },
      initialProps,
    );

    const utils = render(<Header {...defaultProps} />);

    return { utils };
  };

  it(`header has a logo what alt is "secret juju" and src is "LogoPng"`, () => {
    setUp();

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'secret juju');
    expect(logo).toHaveAttribute('src', LogoPng);
  });

  context('isLoginNow test', () => {
    it("when isLoginMode is true, show '로그아웃'", () => {
      setUp();

      screen.getByText('로그아웃');
    });
    it("when isLoginMode is false, show '로그인'", () => {
      setUp({ isLoginNow: false });

      screen.getByText('로그인');
    });
  });

  it('click onAuthButtonClick', () => {
    setUp();

    const headerAuthButton = screen.getByText('로그아웃');

    expect(onAuthButtonClickMock).toBeCalledTimes(0);

    fireEvent.click(headerAuthButton);

    expect(onAuthButtonClickMock).toBeCalledTimes(1);
  });
});
