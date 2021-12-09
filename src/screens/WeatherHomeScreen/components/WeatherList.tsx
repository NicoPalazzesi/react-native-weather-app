import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Weather } from "../../../api/weatherService/types";
import { isEmpty } from "../../../utils/utils";
import WeatherItem from "./WeatherItem";

type WeatherListProps = {
  weather: Weather[] | undefined;
};

const WeatherList = ({ weather }: WeatherListProps) => {
  const styles = StyleSheet.create({
    listContainer: {
      flex: isEmpty(weather) ? 1 : 0,
      paddingVertical: 8,
      paddingHorizontal: 16,
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
    <WeatherItem item={item} />
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