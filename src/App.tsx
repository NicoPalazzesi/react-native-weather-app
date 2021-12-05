import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WeatherStack, {
  WeatherStackParamsList
} from "./navigators/WeatherNavigators";

type AppStackParamsList = {
  WeatherStack: NavigatorScreenParams<WeatherStackParamsList>;
};

const Stack = createStackNavigator<AppStackParamsList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"WeatherStack"} component={WeatherStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;