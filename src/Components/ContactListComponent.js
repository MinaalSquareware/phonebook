// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import ColorCode from '../Utility/Colors';
import ImagePath from '../Utility/ImagePath';
import ClickableImage from './ClickableImage';
const { width, height } = Dimensions.get('screen');

const ContactListComponent = ({
   item,
   key,
   index,
   onDelete,
   onEdit
}) => {
    console.log(item,"dsjbvs");
    // const navigation = useNavigation();
    return(
        <View style={{...styles.mainView,backgroundColor:index%2==0?ColorCode.grey2:ColorCode.whiteOpacity20}}>
<Image
source={{uri:item.profilePic}}
resizeMode={"cover"}
style={styles.profilePic}
/>
<View style={styles.detailsView}>
<View>
    <Text>{item.contactName}</Text>
    <Text>{item.contactNumber}</Text>
</View>
<View style={styles.editDeleteView}>
<ClickableImage
onPress={()=>onEdit(item,index)}
source={ImagePath.edit_Icon}
/>
<ClickableImage
onPress={()=>onDelete(index)}
source={ImagePath.delete_Icon}
/>
</View>
</View>
        </View>
    )
};
const styles = StyleSheet.create({
    mainView:{
        flexDirection:"row",
        height:90,
        backgroundColor:ColorCode.grey2
    },
    profilePic:{
width:"25%",height:90
    },
    detailsView:{
        width:"75%",
        flexDirection:"row",
        paddingHorizontal:18,
        justifyContent:"space-between",
        alignItems:"center"
    },
    editDeleteView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"20%"
    }
});
export default ContactListComponent;
