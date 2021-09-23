import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";

import Container from "../components/Container";
import PlantBackground from "../components/PlantBackground";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import colors from "../utils/colors";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { width, height } from "../utils/window";
import ChakraPetchBoldText from "../components/Text/ChakraPetchBoldText";

const padding = 15;
const cameraWidth = width - padding * 2;
const cameraHeight = height - padding * 2;
const landmarkSize = 2;

const CHECK_SMILE = 0.6;
const MAX_CHECK = 20;

export default function FaceDetectionScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [smilingCount, setSmilingCount] = useState(0);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [faces, setFaces] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setLoading(false);
    })();
  }, []);

  const handleFacesDetected = ({ faces }) => {
    setFaces(faces);
    faces.map((face, index) => {
      if (face.smilingProbability < CHECK_SMILE) {
        setSmilingCount(0);
      }
      if (face.smilingProbability >= CHECK_SMILE) {
        if (smilingCount < MAX_CHECK) {
          setSmilingCount(smilingCount + 1);
        }
        if (smilingCount == MAX_CHECK) {
          navigation.navigate("Completed");
        }
      }
    });
  };

  const renderFace = ({
    bounds,
    faceID,
    rollAngle,
    yawAngle,
    smilingProbability,
  }) => {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `-${rollAngle.toFixed(0)}deg` },
          { rotateY: `-${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          },
        ]}
      >
        {/* <Text style={styles.faceText}>Smiling ({smilingCount} / {MAX_CHECK})</Text> */}
      </View>
    );
  };

  const renderLandmarksOfFace = (face) => {
    const renderLandmark = (position) =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  };

  // const renderLandmarks = () => (
  //   <View style={styles.facesContainer} pointerEvents="none">
  //     {faces.map(renderLandmarksOfFace)}
  //   </View>
  // );

  const renderFaces = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {faces.length >= 1 && renderFace(faces[0])}
    </View>
  );

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
              <Camera
                style={styles.camera}
                type={type}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                  mode: FaceDetector.Constants.Mode.fast,
                  detectLandmarks: FaceDetector.Constants.Landmarks.all,
                  runClassifications:
                    FaceDetector.Constants.Classifications.all,
                  minDetectionInterval: 100,
                  tracking: true,
                }}
              ></Camera>
              {renderFaces()}
              <View
                style={{
                  position: "absolute",
                  right: -65,
                  bottom: 35 + (cameraHeight - 12) / 2 - 60,
                  backgroundColor: colors.main,
                  width: 230,
                  height: 45,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ rotate: "-90deg" }],
                  borderRadius: 10,
                  zIndex: 999,
                }}
              >
                <ChakraPetchBoldText
                  style={{
                    fontSize: 17,
                    color: "white",
                    textShadowRadius: 100,
                  }}
                >
                  Smile {smilingCount}/{MAX_CHECK} times
                </ChakraPetchBoldText>
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
  facesContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 999,
    width: cameraWidth,
    height: cameraHeight,
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
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#FFD700",
    justifyContent: "center",
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: "absolute",
  },
  faceText: {
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent",
  },
});
