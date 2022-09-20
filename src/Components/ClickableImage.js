import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';


const ClickableImage = ({
  imgStyle = {},
  source,
  onPress,
  style,
  activeOpacity,
  resizeMode,
  onPressIn,
  onPressOut,
}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{
        top: 25,
        right: 25,
        bottom: 40,
      }}
      style={{ ...imgStyle, zIndex: 1 }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={activeOpacity}
    >
      <Image source={source} style={style} resizeMode={resizeMode}/>
    </Pressable>
  );
};
export default ClickableImage;
