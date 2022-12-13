import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = props => {
  return <TouchableOpacity>{props.children}</TouchableOpacity>;
};

export default Button;
