import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontSize from "../../../constants/FontSize";
import { capitalizeFirstLetter } from "../../../utils/utils";

type CityDetailsProps = {
  name: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 32,
  },
  city: {
    fontSize: FontSize.bigTitle,
    fontWeight: "bold",
  },
});

const currentDate = () => (
  capitalizeFirstLetter(new Date().toLocaleDateString(
    "es",
    {	weekday: "long",
      month: "numeric",
      day: "numeric",
    }
  ))
);

const CityDetails = ({ name }: CityDetailsProps) => (
  <View style={styles.container}>
    <Text style={styles.city}>{name}</Text>
    <Text>{currentDate()}</Text>
  </View>
);

export default CityDetails;