import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { DropDownItemsType, DropDownItemType, DropDownTestInitialPropsType } from '../DropDownType';

import { mocksDefaultDropDownItem, mocksDropDownItems } from '../../../__mocks__/dropDownMocks';

import DropDown from '../DropDown';

describe('DropDown', () => {
  const onDropDownItemClickMock = jest.fn();
  const onDropDownSectionClickMock = jest.fn();

  const setUp = (initialProps: DropDownTestInitialPropsType = {}) => {
    const defaultProps = Object.assign(
      {
        active: true,
        selectDropDownItem: mocksDefaultDropDownItem,
        unSelectDropDownItems: mocksDropDownItems.filter(
          mDropDownItem => mDropDownItem !== mocksDefaultDropDownItem,
        ),
        onDropDownItemClick: onDropDownItemClickMock,
        onDropDownSectionClick: onDropDownSectionClickMock,
      },
      initialProps,
    );

    const utils = render(<DropDown {...defaultProps} />);

    return { utils };
  };

  it('DropDown render without drop down data', () => {
    const {
      utils: { getByText },
    } = setUp({ unSelectDropDownItems: [] });
    getByText('드롭다운 데이터가 없습니다');
  });

  it('DropDown render with active is false and without drop down data', () => {
    const {
      utils: { getByText },
    } = setUp({ unSelectDropDownItems: [], active: false });
    getByText('드롭다운 데이터가 없습니다');
  });

  it.each`
    dropDownTextData
    ${'업종명순'}
    ${'종목명순'}
    ${'긍정도순'}
    ${'현재가순'}
    ${'전일비순'}
    ${'등락률순'}
  `('DropDown render mocks drop down data', ({ dropDownTextData }) => {
    const {
      utils: { getByText },
    } = setUp();

    getByText(dropDownTextData);
  });

  it.each`
    dropDownTextData | index
    ${'종목명순'}    | ${0}
    ${'긍정도순'}    | ${1}
    ${'현재가순'}    | ${2}
    ${'전일비순'}    | ${3}
    ${'등락률순'}    | ${4}
  `('click drop down item with onDropDownItemClick func', ({ dropDownTextData, index }) => {
    const {
      utils: { getByText },
    } = setUp();

    const dropDownItem = getByText(dropDownTextData);

    expect(onDropDownItemClickMock).toHaveBeenCalledTimes(index);

    fireEvent.click(dropDownItem);

    expect(onDropDownItemClickMock).toHaveBeenCalledTimes(index + 1);
  });
});
