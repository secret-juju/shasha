import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import {
  mocksDefaultDropDownItem,
  mocksUnSelectDropDownItems,
} from '../../../__mocks__/dropDownMocks';

import DropDownContainer from '../DropDownContainer';

import * as StoreReactRedux from '../../../module/store';

describe('DropDownContainer', () => {
  const setUp = () => {
    const dispatch = jest.fn();

    jest.spyOn(StoreReactRedux, 'useAppDispatch').mockImplementation(() => dispatch);
    jest.spyOn(StoreReactRedux, 'useTypedSelector').mockReturnValue({
      selectDropDownItem: mocksDefaultDropDownItem,
      unSelectDropDownItems: mocksUnSelectDropDownItems,
    });

    const utils = render(<DropDownContainer />);

    return { utils, dispatch };
  };

  it('click drop down item and dispatch to be called', () => {
    const {
      dispatch,
      utils: { getByText },
    } = setUp();

    const dropDownItem = getByText('종목명순');

    expect(dispatch).toBeCalledTimes(0);

    fireEvent.click(dropDownItem);

    expect(dispatch).toBeCalledTimes(1);
  });

  it('click "no" drop down item and dispatch to not be called', () => {
    const {
      dispatch,
      utils: { getByTestId },
    } = setUp();

    const dropDownWrapper = getByTestId('drop-down-wrapper');

    expect(dispatch).toBeCalledTimes(0);

    fireEvent.click(dropDownWrapper);

    expect(dispatch).toBeCalledTimes(0);
  });
});
