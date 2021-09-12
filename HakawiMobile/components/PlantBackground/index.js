import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PlantBackground(props) {
  return (
    <View style={{position: 'absolute'}}>
      <Image
        style={{width: windowWidth, height: windowHeight, left: 0, top: 0}}
        source={require('../../assets/images/background.png')}
      />
    </View>
  );
}
