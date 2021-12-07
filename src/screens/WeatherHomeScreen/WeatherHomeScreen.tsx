import React, { useEffect } from "react";
import { useGetWeatherById } from "../../api/weatherService/useGetWeatherById";
import { citiesArray } from "../../constants/constants";
import ContainerParent from "../../components/ContainerParent";
import WeatherList from "./components/WeatherList";
import { showToast } from "../../components/Toast";

const WeatherHomeScreen = () => {
  const { loading, weather, error } = useGetWeatherById(citiesArray);

  useEffect(() => {
    if (error) {
      showToast("Ocurrió un error");
    }
  }, [error]);

  return (
    <ContainerParent loading={loading}>
      <WeatherList weather={weather} />
    </ContainerParent>
  )
}

export default WeatherHomeScreen;