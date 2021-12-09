import React from "react";
import { View, StyleSheet } from "react-native";
import WeatherDetail from "../../../components/WeatherDetail";
import {
  precisionDigits,
  meterPerSecondToKilometersPerHour
} from "../../../utils/utils";

type OtherWeatherDetailsProps = {
  cloudiness: number;
  windSpeed: number;
  humidity: number;
};

type WeatherDetailConfig = {
  icon: string;
  value: string;
};

const styles = StyleSheet.create({
  container: { 
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 32,
  },
  iconStyle: { marginRight: 4 },
});

const OtherWeatherDetails = (
  { cloudiness, windSpeed, humidity }: OtherWeatherDetailsProps
) => {
  const formatWindSpeed = () => (
    precisionDigits(meterPerSecondToKilometersPerHour(windSpeed))
  );

  const weatherDetailConfig: WeatherDetailConfig[] = [
    { icon: "cloud", value: `${cloudiness}%` },
    { icon: "weather-windy", value: `${formatWindSpeed()}km/h` },
    { icon: "water-percent", value: `${humidity}%` },
  ];

  const renderWeatherDetail = (
    { icon, value }: WeatherDetailConfig,
    index: number
  ) => (
    <WeatherDetail
      key={index} 
      icon={icon}
      value={value}
      iconSize={26}
      iconStyle={styles.iconStyle} 
    />
  );

  return (
    <View style={styles.container}>
      {weatherDetailConfig.map(renderWeatherDetail)}
    </View>
  );
};

export default OtherWeatherDetails;