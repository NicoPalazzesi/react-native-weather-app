import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import ContainerParent from "../../components/ContainerParent";
import { WeatherStackParamsList } from "../../navigators/WeatherNavigators";
import {
  useGetWeatherDetailsById
} from "../../api/weatherService/useGetWeatherDetailsById";
import { showToast } from "../../components/Toast";
import { capitalizeFirstLetter } from "../../utils/utils";
import CityDetails from "./components/CityDetails";
import 
  TemperatureDetails
from "./components/TemperatureDetails";
import 
  OtherWeatherDetails
from "./components/OtherWeatherDetails";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  weatherImage: {
    width: 128,
    height: 128,
  },
  weatherDescription: { alignSelf: "center" },
});

const WeatherDetailsScreen = () => {
  const { params: { id } } = useRoute<
    RouteProp<WeatherStackParamsList, "WeatherDetailsScreen">
  >();

  const { loading, weatherDetails, error } = useGetWeatherDetailsById(id);

  useEffect(() => {
    if (error) {
      showToast("Ocurrió un error");
    }
  }, [error]);

  return (
    <ContainerParent loading={loading} style={styles.container}>
      <View>
        <CityDetails name={weatherDetails.name} />
        <TemperatureDetails
          actual={weatherDetails.weather.temperature.actual}
          min={weatherDetails.weather.temperature.min}
          max={weatherDetails.weather.temperature.max}
        />
      </View>
      <View>
        <Image
          source={{
            uri: 
              `http://openweathermap.org/img/wn/${weatherDetails.weather.summary.icon}@2x.png`
          }}
          style={styles.weatherImage}
        />
        <Text style={styles.weatherDescription}>
          {capitalizeFirstLetter(weatherDetails.weather.summary.description)}
        </Text>
      </View>
      <OtherWeatherDetails
        cloudiness={weatherDetails.weather.clouds.all}
        windSpeed={weatherDetails.weather.wind.speed}
        humidity={weatherDetails.weather.clouds.humidity}
      />
    </ContainerParent>
  );
};

export default WeatherDetailsScreen;