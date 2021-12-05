import { StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
  },
});

const Header = (): StackNavigationOptions => (
  {
    headerStyle: styles.headerStyle,
    headerTitleAlign: "center",
    headerTitleStyle: styles.headerTitleStyle,
  }
);

export default Header;