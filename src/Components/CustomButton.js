import React from 'react';
import { TouchableOpacity, StyleSheet,Text } from 'react-native';
import ColorCode from '../Utility/Colors';

const CustomButton = ({
  textBtn,
  customStyle,
  onPress,
  buttonTextStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      accessible
      onPress={onPress}
      activeOpacity={0.8}

      style={{
        ...styles.buttonStyling,
        ...customStyle,
      }}
      {...props}
    >
      <Text style={{ ...styles.textStyle, ...buttonTextStyle }}>
        {textBtn}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: ColorCode.buttonViolet,
    height: 48,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: ColorCode.white,
    fontSize: 16,
  },
});
