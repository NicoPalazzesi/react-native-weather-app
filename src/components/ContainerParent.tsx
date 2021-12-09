import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import Loader from "./Loader";

type ContainerParentProps = {
  loading?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const ContainerParent = (
  { loading, children, style }: ContainerParentProps
) => (
  <SafeAreaView style={[styles.container, style]}>
    {loading && <Loader loading={loading}/>}
    {children}
  </SafeAreaView>
);

export default ContainerParent;