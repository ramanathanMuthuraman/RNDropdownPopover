/**
 * @format
 */

import 'react-native';
import React from 'react';
import RNDropdownPopover from '../RNDropdownPopover';

import {render} from '@testing-library/react-native';

const NOOP = () => {};

describe('RNDropdownPopover', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render RNDropdownPopover', () => {
    const {getByTestId} = render(
      <RNDropdownPopover
        buttonProps={{testID: 'buttonWrapper', onClick: NOOP}}
      />,
    );

    expect(getByTestId('buttonWrapper')).toBeDefined();
  });
});
