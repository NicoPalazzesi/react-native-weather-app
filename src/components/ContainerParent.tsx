import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import Loader from "./Loader";

type ContainerParentProps = {
  loading?: boolean;
  children: JSX.Element | JSX.Element[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const ContainerParent = ({ loading, children }: ContainerParentProps) => (
  <SafeAreaView style={styles.container}>
    {loading && <Loader loading={loading}/>}
    {children}
  </SafeAreaView>
);

export default ContainerParent;