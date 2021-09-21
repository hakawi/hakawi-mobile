import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const width = windowWidth > windowHeight ? windowWidth : windowHeight;
export const height = windowHeight < windowWidth ? windowHeight : windowWidth;
