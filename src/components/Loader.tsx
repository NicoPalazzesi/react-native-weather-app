import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";

type LoaderProps = {
  loading: boolean;
};

const styles = StyleSheet.create({
  loadIndicator: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.translucentGray,
  },
});

const Loader = ({ loading }: LoaderProps) => (
  <ActivityIndicator
    style={styles.loadIndicator}
    size="large" 
    color={Colors.orange} />
);

export default Loader;