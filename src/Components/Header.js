// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import ColorCode from '../Utility/Colors';
import FontFamily from '../Utility/FontFamily';
const { width, height } = Dimensions.get('screen');

const Header = ({
    onPressLeft,
    headerText,
    rightText,
    pressRight,
    containerStyle,
}) => {
    // const navigation = useNavigation();
  return (
      <View style={styles.mainView}>
<Text style={styles.headerText}>{headerText}</Text>
      </View>
  );
};
const styles = StyleSheet.create({
    mainView:{
        alignItems:"center",
        justifyContent:"center",
        height:70,
        backgroundColor:ColorCode.greenHeader
    },
    headerText:{
        fontFamily:FontFamily.medium,
        fontSize:20,
        color:ColorCode.white
    }
});
export default Header;
