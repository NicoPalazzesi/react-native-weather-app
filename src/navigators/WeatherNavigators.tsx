import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherHomeScreen from "../screens/WeatherHomeScreen/WeatherHomeScreen";
import WeatherDetailsScreen from "../screens/WeatherDetailsScreen/WeatherDetailsScreen";
import Header from "./components/Header";

export type WeatherStackParamsList = {
  WeatherHomeScreen: undefined;
  WeatherDetailsScreen: undefined;
};

const Stack = createStackNavigator<WeatherStackParamsList>();

const WeatherStack = () => {
  return (
  <Stack.Navigator screenOptions={Header}>
    <Stack.Screen
      name={"WeatherHomeScreen"}
      component={WeatherHomeScreen}
      options={{ title: "Menú principal" }}
    />
    <Stack.Screen
      name={"WeatherDetailsScreen"}
      component={WeatherDetailsScreen}
      options={{ title: "Detalles" }}
    />
  </Stack.Navigator>
  );
  };

export default WeatherStack;