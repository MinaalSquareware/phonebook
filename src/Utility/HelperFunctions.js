import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';



export function setUserData(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem("userData", data);
  }

export async function getUserData() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem("userData").then((data) => {
        resolve(JSON.parse(data));
      });
    });
  }

export async function clearUserData() {
    return AsyncStorage.removeItem("userData");
  }

const onUploadCamera = async () => {
    // Ask the user for the permission to access the camera
    // const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
    // if (permissionResult.granted === false) {
    //   alert("You've refused to allow this appp to access your camera!");
    //   return;
    // }
    const result = await ImagePicker.launchCameraAsync();
  
    if (!result.cancelled) {
        console.log(result.uri);
        return result.uri
    //   setImage(result.uri);
     
    }
  };

  const onUploadGallery = async() =>{
    // const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    // if (permissionResult.granted === false) {
    //   alert("You've refused to allow this appp to access your photos!");
    //   return;
    // }
  
     let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
        console.log(result.uri,'idjfoijweiofj');
        return result.uri
    
    //  setImage(result.uri);
    }
  };


  export { onUploadCamera, onUploadGallery };