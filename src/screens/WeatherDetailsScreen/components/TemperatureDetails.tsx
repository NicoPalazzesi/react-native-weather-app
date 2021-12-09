import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WeatherDetail from "../../../components/WeatherDetail";
import FontSize from "../../../constants/FontSize";
import { precisionDigits } from "../../../utils/utils";

type TemperatureDetailsProps = {
  actual: number;
  min: number;
  max: number;
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  actualTemperature: {
    fontSize: FontSize.hugeNumbers,
    fontWeight: "400",
  },
  minMaxContainer: { marginLeft: 16 },
  units: {
    marginTop: 18,
    fontSize: FontSize.bigUnits,
    fontWeight: "800",
  },
});

const TemperatureDetails = ({ actual, min, max }: TemperatureDetailsProps) => (
  <View style={styles.container}>
    <Text style={styles.actualTemperature}>{precisionDigits(actual)}</Text>
    <View style={styles.minMaxContainer}>
      <Text style={styles.units}>°C</Text>
      <WeatherDetail icon={"arrow-up"} value={`${precisionDigits(max)}°C`}/>
      <WeatherDetail icon={"arrow-down"} value={`${precisionDigits(min)}°C`}/>
    </View>
  </View>
);

export default TemperatureDetails;