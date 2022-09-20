import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import ColorCode from '../Utility/Colors';
import FontFamily from '../Utility/FontFamily';
import { strings } from '../Utility/i18n';


const TextInputWithName = ({
    onSubmitEditing,
    onPressOut,
    editable,
    multiline,
    selectTextOnFocus,
    placeholder,
    defaultValue,
    placeholderTextColor=ColorCode.grey,
    secureTextEntry,
    maxLength,
    numberOfLines,
    inputType,
    onChangeText,
    value,
    customTextInputStyle,
    textFieldName,
    onPressIn,
    containerStyle,
    showWarning,
}) =>{
return (
    <View style={styles.mainView}>
        <Text style={{...styles.phoneNumberText,...containerStyle}}>
        {textFieldName}
      </Text>
    <TextInput
    onPressOut={onPressOut}
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
      ...styles.inputStyle,
      ...customTextInputStyle,
    //   color: colors.textgray,
    //   fontSize: textScale(15),
    //   fontFamily: fontFamily.medium,
    }}
    keyboardType={inputType}
    onChangeText={onChangeText}
    value={value}
  />
  {showWarning &&<Text style={styles.warningText}>{strings('input.enter_correctname')}</Text>}
  </View>
);
};

const styles = StyleSheet.create({
phoneNumberText:{
    fontSize:18,
    color:ColorCode.black,
    fontFamily:FontFamily.regular,
    marginLeft:8
  },
  inputStyle:{
borderRadius:10,
borderWidth:0.5,
borderColor:ColorCode.black,
padding:9
  },
  warningText:{
    color:"red"
},
  mainView:{
   marginHorizontal:53},
});

export default TextInputWithName;
