import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import ColorCode from '../Utility/Colors';
import Modal from 'react-native-modal';

const RNModal = ({
  modalVisible,
  onClose
}) => {




  return (
    <KeyboardAvoidingView>
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      backdropOpacity={0.3}
     isVisible={modalVisible}>
      <View
          style={{
            flex: 1,
            maxHeight: '80%',
            justifyContent: 'center',
            backgroundColor:ColorCode.white,
            borderRadius:20
          }}>
            
          </View>
    </Modal>
    </KeyboardAvoidingView>
  );
};
export default RNModal;

const styles = StyleSheet.create({
  // modalContainer: {
  //   justifyContent: 'flex-end',
  // },

});
