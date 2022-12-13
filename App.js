/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RNDropdownPopover from './RNDropdownPopover';

import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <RNDropdownPopover
          buttonProps={{
            onClick: () => {},
            children: <Text>Press here to open popover!</Text>,
          }}>
          <View style={[styles.list]}>
            <Text>Option 1</Text>
            <Text>Option 2</Text>
            <Text>Option 3</Text>
            <Text>Option 4</Text>
          </View>
        </RNDropdownPopover>
        <RNDropdownPopover
          buttonProps={{
            onClick: () => {},
            children: <Text>Press here to open popover!</Text>,
          }}>
          <View style={[styles.list]}>
            <Text>Option 1</Text>
            <Text>Option 2</Text>
            <Text>Option 3</Text>
            <Text>Option 4</Text>
          </View>
        </RNDropdownPopover>
      </View>

      {/* <RNDropdownPopover />

      <RNDropdownPopover /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  button: {
    marginTop: 20,
    padding: 20,
    fontSize: 36,
    color: 'black',
  },
  list: {
    padding: 20,
    width: 400,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
