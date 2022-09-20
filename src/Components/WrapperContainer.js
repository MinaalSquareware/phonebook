import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Text } from "react-native";
import ColorCode from "../Utility/Colors";
const WrapperContainer = ({
  children,
  bgColor = ColorCode.white,
  statusBarColor = ColorCode.greenHeader,
  barStyle = "dark-content",
}) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: statusBarColor }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{ backgroundColor: bgColor, flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default WrapperContainer;
