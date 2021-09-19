import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import Card from '../components/Card';
import BackButton from '../components/BackButton';
import {RNCamera} from 'react-native-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const BACKEND_TO_USE = 'cpu';

export default function FaceDetectionScreen({navigation}) {
  const [canDetectFaces, setSanDetectFaces] = useState(true);
  const [faces, setFaces] = useState([]);

  useEffect(async () => {
    await tf.setBackend(BACKEND_TO_USE);
    await tf.ready();
  });

  //   const facesDetected = faces => {
  //     console.log('faces', faces);
  //     setFaces(faces);
  //   };

  //   const renderFaces = () => (
  //     <View style={styles.facesContainer} pointerEvents="none">
  //       {faces.map(renderFace)}
  //     </View>
  //   );

  //   const renderFace = ({bounds, faceID, rollAngle, yawAngle}) => (
  //     <View
  //       key={faceID}
  //       transform={[
  //         {perspective: 600},
  //         {rotateZ: `${rollAngle.toFixed(0)}deg`},
  //         {rotateY: `${yawAngle.toFixed(0)}deg`},
  //       ]}
  //       style={[
  //         styles.face,
  //         {
  //           ...bounds.size,
  //           left: bounds.origin.x,
  //           top: bounds.origin.y,
  //         },
  //       ]}>
  //       <Text style={styles.faceText}>ID: {faceID}</Text>
  //       <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
  //       <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
  //     </View>
  //   );

  return (
    <Container style={{alignItems: 'center'}}>
      <PlantBackground />
      <BackButton navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Card style={{flex: 1, margin: 30}} height={250}>
          {/* <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.off}
            focusDepth={0}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            faceDetectionLandmarks={
              RNCamera.Constants.FaceDetection.Landmarks
                ? RNCamera.Constants.FaceDetection.Landmarks.all
                : undefined
            }
            faceDetectionClassifications={
              RNCamera.Constants.FaceDetection.Classifications
                ? RNCamera.Constants.FaceDetection.Classifications.all
                : undefined
            }
            onFacesDetected={facesDetected}
          />
          <View
            style={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.flipText}>Detecting Faces</Text>
          </View>
          {renderFaces()} */}
        </Card>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 999,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
});
