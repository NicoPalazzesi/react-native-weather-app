import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const WeatherDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de detalles</Text>
    </View>
  )
}

export default WeatherDetailsScreen;