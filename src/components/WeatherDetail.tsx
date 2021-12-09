import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type WeatherDetailProps = {
  style?: StyleProp<ViewStyle>;
  icon: string;
  iconSize?: number;
  iconStyle?: StyleProp<TextStyle>;
  value: number | string;
  valueStyle?: StyleProp<TextStyle>
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const WeatherDetail = ({
  style,
  icon,
  iconSize = 18,
  iconStyle,
  value,
  valueStyle,
}: WeatherDetailProps) => (
  <View style={[styles.container, style]}>
    <Icon name={icon} size={iconSize} style={iconStyle}/>
    <Text style={valueStyle}>{value}</Text>
  </View>
);

export default WeatherDetail;