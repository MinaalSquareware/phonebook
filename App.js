import React, { useCallback, useEffect,useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import * as Font from 'expo-font';
// import Routes from "./src/Navigation/Routes";
// import FlashMessage from "react-native-flash-message";
// import { moderateScale, textScale } from "./src/styles/responsiveSize";
import store from "./src/Redux/store";
// import { getItem, getUserData } from "./src/utils/utils";
// import types from "./src/redux/types";
import Login from "./src/Screens/Login";
import Routes from "./src/Routes/Routes";


const { dispatch } = store;

const App = () => {

  useEffect(() => {
    loadFonts();
  }, []);
  const [load, setLoad] = useState(true);

  const loadFonts = async () => {
    // AndroidKeyboardAdjust.setAdjustPan();
    await Font.loadAsync({
      'Poppins-Bold': require('./src/Assets/Fonts/Poppins-Bold.ttf'),
      'Poppins-Black': require('./src/Assets/Fonts/Poppins-Black.ttf'),
      'Poppins-Light': require('./src/Assets/Fonts/Poppins-Light.ttf'),
      'Poppins-Medium': require('./src/Assets/Fonts/Poppins-Medium.ttf'),
      'Poppins-Regular': require('./src/Assets/Fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./src/Assets/Fonts/Poppins-SemiBold.ttf'),
    });
    setLoad(false);
  };
  // const init = () => {
  //   getUserData().then((res) => {
  //     if (res) {
  //       dispatch({
  //         type: types.LOGIN,
  //         payload: res,
  //       });
  //     }
  //   });
  //   getItem("isFirst").then((res) => {
  //     dispatch({
  //       type: types.TUTORIAL,
  //       payload: res,
  //     });
  //   });
  // };

  
  if (load) {
    return null;
  }
else {
  return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Routes/>
        </SafeAreaProvider>
      </Provider>
  );
}
};

export default App;
