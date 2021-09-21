import React, { useState, useEffect } from "react";
import {View, Image, Dimensions} from 'react-native';
import BungeeInlineText from '../components/Text/BungeeInlineText';
import ShadowButton from '../components/Button/ShadowButton';
import colors from '../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FDFAE7',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          position: 'absolute',
          width: windowWidth,
        }}>
        <Image
          style={{width: 181, height: 193, left: 0, top: 0}}
          source={require('../assets/images/home/path_left.png')}
        />
        <Image
          style={{width: 182, height: 228, right: 0, top: 0}}
          source={require('../assets/images/home/path_right.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          position: 'absolute',
          width: windowWidth,
        }}>
        <Image
          style={{width: 286, height: 414, left: 0, top: 0}}
          source={require('../assets/images/home/man.png')}
        />
        <Image
          style={{width: 317, height: 252, right: 0, top: 153}}
          source={require('../assets/images/home/girl.png')}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <BungeeInlineText style={{fontSize: 100, color: colors.main}}>
          HAKAWI
        </BungeeInlineText>
        <BungeeInlineText style={{fontSize: 22, color: colors.main}}>
          #makeyourhealthbetter
        </BungeeInlineText>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ShadowButton
          style={{width: 155}}
          onPress={() => {
            navigation.navigate('Play');
          }}>
          PLAY NOW
        </ShadowButton>
        <ShadowButton style={{marginTop: 15, width: 155}}>SETTING</ShadowButton>
        <ShadowButton style={{marginTop: 15, width: 155}}>HELP</ShadowButton>
      </View>
    </View>
  );
}
