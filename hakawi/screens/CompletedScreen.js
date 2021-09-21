import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import OverlayBackground from '../components/OverlayBackground';
import ChakraPetchBoldText from '../components/Text/ChakraPetchBoldText';

export default function CompletedScreen({navigation}) {
  useEffect(() => {});

  return (
    <Container style={{alignItems: 'center'}}>
      <PlantBackground />
      <OverlayBackground />
      <View
        style={{
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
          onPress={() => {
            navigation.navigate('NewItem');
          }}>
          <Image
            style={{width: 104, height: 104}}
            source={require('../assets/images/completed/checked.png')}
          />
          <ChakraPetchBoldText
            style={{
              marginTop: 20,
              fontSize: 40,
              color: 'white',
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 0,
              textShadowColor: '#868686',
            }}>
            COMPLETED
          </ChakraPetchBoldText>
          <ChakraPetchBoldText
            style={{
              fontSize: 40,
              color: 'white',
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 0,
              textShadowColor: '#868686',
            }}>
            You are an amazing!
          </ChakraPetchBoldText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
