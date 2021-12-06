import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";

import WeatherStack, {
  WeatherStackParamsList
} from "./navigators/WeatherNavigators";

type AppStackParamsList = {
  WeatherStack: NavigatorScreenParams<WeatherStackParamsList>;
};

const Stack = createStackNavigator<AppStackParamsList>();

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"WeatherStack"} component={WeatherStack} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;