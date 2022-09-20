import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import ColorCode from '../Utility/Colors';
import { strings } from '../Utility/i18n';
import ImagePath from '../Utility/ImagePath';
const { width, height } = Dimensions.get('screen');

const ProfileImage = ({
    onImageUpload,
    profilemg,
    warningPic
}) => {
    console.log(profilemg,"hubffguhiuwqe");
    return (
        <View style={styles.profilePicView}>
          <TouchableOpacity style={styles.profileOuter} activeOpacity={0.8} 
          onPress={onImageUpload}
          >
                    <Image
                      source={profilemg?{uri:profilemg}:ImagePath.profile_Img}
                      style={{...styles.cardImage}}
                    />
                </TouchableOpacity>
               {!profilemg&& <Text style={{color:warningPic?"red":ColorCode.black}}>{strings('strings.upload_pic')}</Text>}
        </View>
      );
};
const styles = StyleSheet.create({
    profilePicView: {
        alignItems: 'center',
        marginTop:28
      },
      profileOuter: {
        height: 130,
        width: 130,
        borderRadius: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorCode.countryPickerBtnBlue,
        marginBottom: 8,
      }, cardImage:{
        height: 130,
        width: 130,
        borderRadius: 130,
      },
});
export default ProfileImage;
