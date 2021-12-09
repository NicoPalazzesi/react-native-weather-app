import { StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";
import FontSize from "../../constants/FontSize";

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: FontSize.title,
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