import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { WeatherStackParamsList } from "../../navigators/WeatherNavigators";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "blue",
  },
});

const WeatherHomeScreen = () => {
  const navigation = useNavigation<
    StackNavigationProp<WeatherStackParamsList, "WeatherHomeScreen">
  >();

  const goToWeatherDetails = () => {
    navigation.navigate("WeatherDetailsScreen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText} onPress={goToWeatherDetails}>
        Ir a detalles
      </Text>
    </View>
  )
}

export default WeatherHomeScreen;