import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Login from "../Screens/Login";
import ContactList from "../Screens/ContactList";
import EditScreen from "../Screens/EditScreen";

const Stack = createStackNavigator();

export default function Routes() {
  const userInfo = useSelector((data) => data?.auth?.userData);

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        {/* {!userInfo.accessToken
          ? AuthScreen(Stack, isFirstTime)
          : MainStack(Stack)} */}
           <Stack.Screen
        name={"Login"}
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
           <Stack.Screen
        name={"ContactList"}
        component={ContactList}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name={"EditScreen"}
        component={EditScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
