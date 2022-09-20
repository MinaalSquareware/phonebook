import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ColorCode from '../Utility/Colors';
import CustomButton from './CustomButton';

const { width, height } = Dimensions.get('screen');

const AwareScrollView = ({children,btnText,onPressButton,onSkip,keyboardVerticalOffset}) =>{
    return (<>
        <KeyboardAwareScrollView
          enableOnAndroid
          extraScrollHeight={50}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
            {children}
            </KeyboardAwareScrollView>
            <KeyboardAvoidingView
           behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.btnstyling}
        >
          <CustomButton
            textBtn={btnText}
            onPress={onPressButton}
            customStyle={styles.customBtnStyle}
          />
        </KeyboardAvoidingView>
            </>
    );
};
export default AwareScrollView;

const styles = StyleSheet.create({
    btnstyling: {
        position: 'absolute',
        bottom: 20,
        // paddingHorizontal:20,
         marginBottom:10,
      },
      customBtnStyle:{
    width:width/1.37,
        marginHorizontal:53
      },
});
