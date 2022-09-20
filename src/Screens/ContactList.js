import React, { useEffect, useState,useRef } from 'react';
import { View, StyleSheet, ImageBackground,FlatList,Text,TouchableOpacity } from 'react-native';
import WrapperContainer from '../Components/WrapperContainer';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import ColorCode from '../Utility/Colors';
import ContactListComponent from '../Components/ContactListComponent';
import { deleteData, saveUserData } from '../Redux/actions/auth';
import RNModal from '../Components/Modal';

const ContactList = ({navigation,route}) => {
const userInfo = useSelector((state) => state.auth.userData); 
// useFocusEffect(React.useCallback(()=>{
//         updateState({contactData:[...userInfo],toggle:true});
// },[])
// );
useEffect(()=>{
    const unsubscribe = navigation.addListener("focus", async () => {
        updateState({contactData:[...userInfo],toggle:true});
    });
      return unsubscribe;
},[]);
const [state, setState] = useState({
    modalVisible:false,
    toggle:false,
    contactData:[]
  });
  const { contactData,modalVisible,toggle} =state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

const pressAdd = () =>{
    navigation.navigate('Login');
}

const onDelete = (index) =>{
    let dummyarr = [...contactData]
    dummyarr.splice(index, 1);
updateState({contactData:dummyarr})
deleteData(index);
}

const onEdit = (item,index) =>{
     navigation.push("EditScreen",{info:item,index:index})
}

const onCloseModal = () =>{
    updateState({modalVisible:false})
}

const renderContacts =({item,index}) =>{
    return(
       <ContactListComponent
       item={item}
        key={index}
        index={index}
        onDelete={onDelete}
        onEdit={onEdit}
       />
    )
}


if(!toggle){
    null
}else{
return(
    <WrapperContainer>
<Header
headerText={"Hi , Jack"}
/>
<FlatList
data={contactData}
renderItem={renderContacts}
/>
<TouchableOpacity style={styles.addView}
onPress={pressAdd}
>
    <Text style={styles.plusIcon}>+</Text>
</TouchableOpacity>


{/* <RNModal
modalVisible={modalVisible}
onClose={onCloseModal}
/> */}
    </WrapperContainer>
)
}
};
const styles = StyleSheet.create({
    addView:{
        position:"absolute",
        bottom:24,
        right:18,
        backgroundColor:ColorCode.greenHeader,
        height:60,
        width:60,
        borderRadius:60,
        alignItems:"center",
        justifyContent:"center"
    },
    plusIcon:{
        color:ColorCode.white,
        fontSize:35,
        textAlign:"center",
    }
});
export default ContactList;
