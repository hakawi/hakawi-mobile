import * as React from "react";
import { View, Image } from "react-native";
import theme from "../../constants/theme";
import {width, height} from "../../utils/window";

export default function PlantBackground(props) {
  const { themeMode } = props;

  const background = {
    day: require("../../assets/images/background.png"),
    night: require("../../assets/images/background_night.png"),
  };

  const backgroundSource =
    themeMode == theme.night ? background.night : background.day;

  return (
    <View style={{ position: "absolute", zIndex: 0 }}>
      <Image
        style={{ width: width, height: height, left: 0, top: 0 }}
        source={backgroundSource}
      />
    </View>
  );
}
