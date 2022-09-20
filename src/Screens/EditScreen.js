import React, { useEffect, useState,useRef } from 'react';
import { View, StyleSheet, ImageBackground,FlatList,Text } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import AwareScrollView from '../Components/AwareScrollView';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import ProfileImage from '../Components/ProfileImage';
import TextInputWithName from '../Components/TextInputWithName';
import WrapperContainer from '../Components/WrapperContainer';
import FontFamily from '../Utility/FontFamily';
import { strings } from '../Utility/i18n';
import * as ImagePicker from 'expo-image-picker';
import { editData, saveUserData } from '../Redux/actions/auth';
import { useSelector } from 'react-redux';

const EditScreen = ({navigation,route}) => {
    useEffect(()=>{
        const unsubscribe = navigation.addListener("focus", async () => {
             updateState({ind:route?.params?.index,
                name:route?.params?.info?.contactName,
                number:route?.params?.info?.contactNumber,
                image:route?.params?.info?.profilePic})
          });
          return unsubscribe;
    },[]);
    //  const {info,index} = route?.params;
const userInfo = useSelector((state) => state.auth.userData);
const actionSheetRef = useRef();  



const [state, setState] = useState({
    name:"",
    image:"",
    number:"",
    ind:"",
    warningName:false,
    warningNumber:false,
    warningPic:false,
  });
  const { number,ind,image,name,warningName,warningNumber,warningPic} =state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));


const BUTTONS = [
    'Upload from Gallery',
    'Take Photo',
    'Cancel',
  ]; 
let CANCEL_INDEX = 2;
const onImageUpload = () =>{
    actionSheetRef.current.show();
};

const onUploadGallery = async() =>{
  
     let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
        updateState({image:result.uri,warningPic:false});
    }
  };

  const onUploadCamera = async () => {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
        updateState({image:result.uri,warningPic:false});
    }
  };

  const onAddtoPhoneBook = () =>{
        const dataArr = {
            profilePic:image,
            contactName:name,
            contactNumber:number
        };
  if(name?.length>0&&number?.length>0&&image?.length>0)
  {
    const arr = [...userInfo];
    arr.splice(ind,1,dataArr)
    arr[ind]=dataArr;
    console.log(arr,"reresrsrwrwqqqqqq");
     editData(arr);
     navigation.push("ContactList")
//      setTimeout(()=>{},2000)
 }
else if(name?.length==0){
    updateState({warningName:true})
        }
        else if(number?.length==0){
    updateState({warningNumber:true})
        }
        else if(image?.length==0){
    updateState({warningPic:true})
        }
  }



  return (
    <WrapperContainer>
<Header headerText={"Welcome"}/>
<AwareScrollView
      keyboardVerticalOffset={Platform.OS === 'ios' ?50:-400}
        btnText={'Edit'}
        onPressButton={onAddtoPhoneBook}
      >
<ProfileImage
onImageUpload={onImageUpload}
profilemg={image}
warningPic={warningPic}
/>

<View style={styles.inputView}>
<TextInputWithName
textFieldName={strings('input.name')}
placeholder={strings('input.enter_name')}
customTextInputStyle={styles.nameInput}
value={name}
showWarning={warningName}
onChangeText={(txt)=>{updateState({name:txt,warningName:false});}}
/>

<TextInputWithName
textFieldName={strings('input.phone_no')}
placeholder={strings('input.enter_num')}
customTextInputStyle={styles.nameInput}
inputType={'numeric'}
value={number}
showWarning={warningNumber}
onChangeText={(txt)=>{updateState({number:txt,warningNumber:false})}}
/>
</View>
</AwareScrollView>
{/* <CustomButton
textBtn={strings('button.add_phonebook')}
customStyle={styles.buttonStyling}
/> */}
<ActionSheet
    ref={actionSheetRef}
    options={BUTTONS}
    cancelButtonIndex= {CANCEL_INDEX}
    onPress={(index) => {
      if (index == 0){onUploadGallery()}
      else if (index == 1){onUploadCamera();}
     }}
    />
    </WrapperContainer>

    
  );
};
const styles = StyleSheet.create({
    inputView:{
        marginTop:24,
        marginBottom:54
    },
    buttonStyling:{
        width:285,
        marginHorizontal:53
    },
    nameInput:{
marginBottom:13
    },
});
export default EditScreen;
