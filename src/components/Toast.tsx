import Toast from "react-native-simple-toast";

export const Duration = {
  SHORT: Toast.SHORT,
  LONG: Toast.LONG,
};

export const showToast = (
  message: string,
  animationTime: number = Duration.SHORT
) => {
  Toast.show(message, animationTime);
};