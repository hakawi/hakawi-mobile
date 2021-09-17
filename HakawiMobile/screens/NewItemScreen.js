import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import OverlayBackground from '../components/OverlayBackground';
import LightBackground from '../components/LightBackground';
import ShadowButton from '../components/Button/ShadowButton';
import ChakraPetchBoldText from '../components/Text/ChakraPetchBoldText';
import colors from '../utils/colors';

export default function NewItem({navigation}) {
  useEffect(() => {});

  return (
    <Container style={{alignItems: 'center'}}>
      <PlantBackground />
      <OverlayBackground />
      <LightBackground />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          zIndex: 999,
        }}>
        <ChakraPetchBoldText
          style={{
            fontSize: 40,
            color: 'white',
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 0,
            textShadowColor: '#868686',
          }}>
          NEW ITEM
        </ChakraPetchBoldText>
        <Image
          style={{width: 110, height: 69}}
          source={require('../assets/images/new_item/cow.png')}
        />
        <View>
          <ShadowButton
            mainBackground={colors.lightGreen}
            shadowBackground={'#86A439'}
            style={{width: 150}}
            >
            <ChakraPetchBoldText
              style={{
                color: '#627A23',
              }}>
              Collect
            </ChakraPetchBoldText>
          </ShadowButton>
        </View>
      </View>
    </Container>
  );
}
