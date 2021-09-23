import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

import Container from "../components/Container";
import PlantBackground from "../components/PlantBackground";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import colors from "../utils/colors";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";

export default function FaceDetectionScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setLoading(false);
    })();
  }, []);

  return (
    <Container style={{ alignItems: "center" }}>
      <BackButton navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Card style={{ flex: 1, margin: 30 }} height={250}>
          {loading ? (
            <ActivityIndicator color={colors.main} size={"large"} />
          ) : (
            <View>
              <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <Text style={styles.text}> Flip </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          )}
        </Card>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
