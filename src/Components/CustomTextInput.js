import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const CustomTextInput = ({
    onSubmitEditing,
    editable,
    multiline,
    selectTextOnFocus,
    placeholder,
    defaultValue,
    placeholderTextColor,
    secureTextEntry,
    maxLength,
    numberOfLines,
    inputType,
    onChangeText,
    value,
    customTextInputStyle,
    onPressIn,
}) =>{
return (
    <TextInput
    onPressIn={onPressIn}
    onSubmitEditing={onSubmitEditing}
    editable={editable}
    multiline={multiline}
    selectTextOnFocus={selectTextOnFocus}
    placeholder={placeholder}
    autoCompleteType="off"
    defaultValue={defaultValue}
    placeholderTextColor={placeholderTextColor}
    secureTextEntry={secureTextEntry}
    numberOfLines={numberOfLines}
    maxLength={maxLength}
    // onFocus={onFocus}
    style={{
      ...customTextInputStyle,
    //   color: colors.textgray,
    //   fontSize: textScale(15),
    //   fontFamily: fontFamily.medium,
    }}
    keyboardType={inputType}
    onChangeText={onChangeText}
    value={value}
  />
);
};

export default CustomTextInput;
