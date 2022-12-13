import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native';
import Popover from 'react-native-popover-view';

const ARROW_DOWN_HEIGHT = 10;
const BORDER_WIDTH = 2;

const platformRelatedStyles = {
  ios: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  android: {
    elevation: 2,
  },
};

const RNDropdownPopover = props => {
  const [toggleList, setToggleList] = useState(false);

  const {
    buttonProps,
    popoverProps,
    contentWrapperProps,
    iconWrapperProps,
    iconProps,
  } = props;

  const {onClick, children, ...buttonRestProps} = buttonProps;

  const shadowStyles = platformRelatedStyles[Platform.OS];

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    if (toggleList) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [toggleList, fadeIn, fadeOut]);

  return (
    <Popover
      offset={10}
      isVisible={toggleList}
      arrowSize={{width: 0, height: 0}}
      backgroundStyle={{opacity: 0}}
      popoverStyle={[shadowStyles, {backgroundColor: 'white'}]}
      onRequestClose={() => {
        setToggleList(false);
      }}
      testID="popover"
      from={
        <TouchableOpacity
          style={{...styles.button}}
          onPress={() => {
            buttonProps?.onClick?.();
            setToggleList(true);
          }}
          {...buttonRestProps}>
          <View style={[styles.wrapper]} {...contentWrapperProps}>
            {buttonProps.children}
            <View style={[styles.iconWrapper]} {...iconWrapperProps}>
              <Text style={[styles.icon]} {...iconProps}>
                {toggleList ? 'Down' : 'Up'}{' '}
              </Text>
            </View>
          </View>
          {
            <Animated.View
              style={[
                styles.triangle,
                styles.arrowDown,
                {
                  opacity: fadeAnim,
                },
              ]}
            />
          }
        </TouchableOpacity>
      }
      {...popoverProps}>
      {props.children}
    </Popover>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: BORDER_WIDTH,
  },
  wrapper: {
    backgroundColor: 'tomato',
    padding: 20,
    margin: 2,
    maxWidth: 180,
    borderRadius: 20,
    borderColor: 'tomato',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    padding: 20,
    width: 400,
  },
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    bottom: -(ARROW_DOWN_HEIGHT - BORDER_WIDTH),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    display: 'flex',
    alignSelf: 'center',
  },
  arrowDown: {
    borderTopWidth: ARROW_DOWN_HEIGHT,
    borderRightWidth: ARROW_DOWN_HEIGHT,
    borderBottomWidth: 0,
    borderLeftWidth: ARROW_DOWN_HEIGHT,
    borderTopColor: 'tomato',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  iconWrapper: {
    width: 20,
  },
  icon: {
    alignSelf: 'flex-start',
  },
});

export default RNDropdownPopover;
