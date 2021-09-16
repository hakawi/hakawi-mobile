import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

export default function MissionScreen({navigation}) {
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
        <Card style={{flex: 1, margin: 20}} />
      </View>
    </Container>
  );
}
