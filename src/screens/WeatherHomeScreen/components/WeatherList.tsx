import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { Weather } from "../../../api/weatherService/types";
import Colors from "../../../constants/Colors";
import { formatTemperature, isEmpty } from "../../../utils/utils";

type WeatherListProps = {
  weather: Weather[];
};

const WeatherList = ({ weather }: WeatherListProps) => {
  const styles = StyleSheet.create({
    listContainer: {
      flex: isEmpty(weather) ? 1 : 0,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 1,
      borderColor: Colors.silverGray,
      marginVertical: 8,
    },
    itemImage: {
      width: 64,
      height: 64,
    },
    itemCityName: {
      flex: 1,
      marginLeft: 10,
      fontWeight: "600",
      fontSize: 14
    },
    itemTemperature: {
      fontSize: 16,
      fontWeight: "bold",
      marginRight: 10,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const EmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text>No hay climas para mostrar</Text>
    </View>
  );

  const renderCityWeather = ({ item }: { item: Weather } ) => (
    <View style={styles.itemContainer}>
       <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${item.weather.summary.icon}@2x.png`
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemCityName}>{item.name}</Text>
      <Text style={styles.itemTemperature}>
        {formatTemperature(item.weather.temperature.actual)}°C
      </Text>
    </View>
  );

  return (
    <FlatList
      data={weather}
      renderItem={renderCityWeather}
      keyExtractor={(city) => city.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default WeatherList;