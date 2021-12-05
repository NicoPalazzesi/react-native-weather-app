import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WeatherStack from "./navigators/WeatherNavigators";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"WeatherStack"} component={WeatherStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;