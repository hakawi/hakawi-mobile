import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

export default function BackButton({ navigation, style, replaceStyle }) {
  return (
    <View
      style={replaceStyle ? replaceStyle : { ...styles.container, ...style }}
    >
      <TouchableOpacity
        style={{ ...styles.button, marginLeft: 10 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          style={{ width: 67, height: 26 }}
          source={require("../../assets/images/back_button/back_btn.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 30,
    top: 30,
    zIndex: 999,
  },
  button: {},
});
