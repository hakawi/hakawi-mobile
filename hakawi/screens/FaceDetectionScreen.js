import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import Card from '../components/Card';
import BackButton from '../components/BackButton';
import colors from '../utils/colors';

export default function FaceDetectionScreen({navigation}) {
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
        <Card style={{flex: 1, margin: 30}} height={250}></Card>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 200,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  cameraContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  camera: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 600 / 2,
    height: 800 / 2,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 0,
  },
  modelResults: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 600 / 2,
    height: 800 / 2,
    zIndex: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 0,
  },
});
