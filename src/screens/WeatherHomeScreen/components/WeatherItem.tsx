import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import { WeatherStackParamsList } from "../../../navigators/WeatherNavigators";
import { precisionDigits } from "../../../utils/utils";
import { Weather } from "../../../api/weatherService/types";

type WeatherItemProps = {
  item: Weather;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.silverGray,
    marginVertical: 8,
  },
  image: {
    width: 64,
    height: 64,
  },
  cityName: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "600"
  },
  temperature: {
    fontSize: FontSize.title,
    fontWeight: "bold",
    marginRight: 10,
  },
})

const WeatherItem = ({ item }: WeatherItemProps) => {
  const navigation = useNavigation<
    StackNavigationProp<WeatherStackParamsList, "WeatherHomeScreen">
  >();

  const goToDetailsScreen = (id: string) => {
    navigation.navigate("WeatherDetailsScreen", { id });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailsScreen(item.id)}
    >
      <Image
        source={{
          uri: 
            `http://openweathermap.org/img/wn/${item.weather.summary.icon}@2x.png`
        }}
        style={styles.image}
      />
      <Text style={styles.cityName}>{item.name}</Text>
      <Text style={styles.temperature}>
        {precisionDigits(item.weather.temperature.actual)}°C
      </Text>
    </TouchableOpacity>
  );
};

export default WeatherItem;