import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  Text,
} from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import * as posenet from "@tensorflow-models/posenet";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import colors from "../utils/colors";
import { width, height } from "../utils/window";
import ChakraPetchBoldText from "../components/Text/ChakraPetchBoldText";

const TensorCamera = cameraWithTensors(Camera);

const inputTensorWidth = 152;
const inputTensorHeight = 200;

const padding = 15;
const cameraWidth = width - padding * 2;
const cameraHeight = height - padding * 2;
const MIN_KEYPOINT_SCORE = 0.5;

const CHECK_KEYPOINTS = 17;

export default function TensorCameraScreen({ navigation }) {
  const [isTfReady, setIsTfReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posenetModel, setPosenetModel] = useState(null);
  const [pose, setPose] = useState(null);
  const [keypointsNumber, setKeypointsNumber] = useState(0);
  const requestRef = React.useRef();

  useEffect(() => {
    loadTensorflow();
    loadPosenetModel();
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const checkCompleted = (keypoints) => {
    const length = keypoints.filter((k) => k.score > MIN_KEYPOINT_SCORE).length;
    setKeypointsNumber(length);
    if (length === CHECK_KEYPOINTS) {
      setPosenetModel(null);
      setPose(null);
      cancelAnimationFrame(requestRef.current);
      navigation.navigate("Completed");
    }
  };

  const loadTensorflow = async () => {
    await tf.ready();
    setIsTfReady(true);
  };

  const loadPosenetModel = async () => {
    if (!posenetModel) {
      await posenet
        .load({
          architecture: "MobileNetV1",
          outputStride: 16,
          inputResolution: {
            width: inputTensorWidth,
            height: inputTensorHeight,
          },
          multiplier: 0.75,
          quantBytes: 2,
        })
        .then((model) => {
          setPosenetModel(model);
          setLoading(false);
        });
    }
  };

  const handleCameraStream = (images, updatePreview, gl) => {
    const loop = async () => {
      if (posenetModel) {
        const nextImageTensor = images.next();
        if (nextImageTensor) {
          const nextImageTensorValue = nextImageTensor.value;
          const flipHorizontal = Platform.OS === "ios" ? false : true;
          const pose = await posenetModel.estimateSinglePose(
            nextImageTensorValue,
            {
              flipHorizontal,
            }
          );
          setPose(pose);
          checkCompleted(pose.keypoints);
          tf.dispose([nextImageTensorValue]);
        }
      }
      requestRef.current = requestAnimationFrame(loop);
    };
    loop();
  };

  const renderPose = () => {
    if (pose === null) {
      return null;
    }
    const keypoints = pose.keypoints
      .filter((k) => k.score > MIN_KEYPOINT_SCORE)
      .map((k, i) => {
        return (
          <Circle
            key={`skeletonkp_${i}`}
            cx={k.position.x}
            cy={k.position.y}
            r="2"
            strokeWidth="0"
            fill="blue"
          />
        );
      });

    const adjacentKeypoints = posenet.getAdjacentKeyPoints(
      pose.keypoints,
      MIN_KEYPOINT_SCORE
    );

    const skeleton = adjacentKeypoints.map(([from, to], i) => {
      return (
        <Line
          key={`skeletonls_${i}`}
          x1={from.position.x}
          y1={from.position.y}
          x2={to.position.x}
          y2={to.position.y}
          stroke="magenta"
          strokeWidth="1"
        />
      );
    });

    return (
      <Svg
        height="100%"
        width="100%"
        viewBox={`0 0 ${inputTensorWidth} ${inputTensorHeight}`}
      >
        {skeleton}
        {keypoints}
      </Svg>
    );
  };

  return (
    <Container style={styles.container}>
      <View style={styles.overlay}>
        <BackButton navigation={navigation} replaceStyle={styles.backButton} />
      </View>
      <View style={styles.outsideCameraContainer}>
        <View style={styles.cameraContainer}>
          {loading ? (
            <ActivityIndicator color={colors.main} size={"large"} />
          ) : (
            <>
              <TensorCamera
                // Standard Camera props
                style={styles.camera}
                type={Camera.Constants.Type.front}
                // Tensor related props
                resizeHeight={inputTensorHeight}
                resizeWidth={inputTensorWidth}
                onReady={handleCameraStream}
                autorender={false}
              />
              <View style={styles.modelResults}>{renderPose()}</View>
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 999,
                  width: cameraWidth - 12,
                  height: cameraHeight - 12,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    right: -25,
                    bottom: 35 + (cameraHeight - 12) / 2 - 60,
                    backgroundColor: colors.main,
                    width: 120,
                    height: 45,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [{ rotate: "-90deg" }],
                    borderRadius: 10
                  }}
                >
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 17,
                      color: "white",
                      textShadowRadius: 100,
                    }}
                  >
                    {keypointsNumber}/{CHECK_KEYPOINTS} points
                  </ChakraPetchBoldText>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    padding: 0,
    backgroundColor: colors.secondary,
  },
  backButton: {
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    bottom: 55,
    zIndex: 999,
    left: 20,
  },
  overlay: {
    flex: 1,
    zIndex: 999,
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
  },
  outsideCameraContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width,
    height,
  },
  cameraContainer: {
    width: cameraWidth,
    height: cameraHeight,
    padding: 0,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.yellow,
    borderWidth: 6,
    borderColor: colors.main,
  },
  camera: {
    position: "absolute",
    left: 0,
    top: 0,
    width: cameraWidth - 12,
    height: cameraHeight - 12,
    zIndex: 1,
  },
  modelResults: {
    position: "absolute",
    left: 0,
    top: 0,
    width: cameraWidth - 12,
    height: cameraHeight - 12,
    zIndex: 20,
    transform: [{ rotate: "-90deg" }],
  },
});
