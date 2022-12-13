/**
 * @format
 */

import 'react-native';
import React from 'react';

import App from '../App';

import {render} from '@testing-library/react-native';

jest.mock('../RNDropdownPopover');

test('renders correctly', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
