import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';
import theme from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PlantBackground(props) {
  const {themeMode} = props;

  const background = {
    day: require('../../assets/images/background.png'),
    night: require('../../assets/images/background_night.png'),
  };

  const backgroundSource =
    themeMode == theme.night ? background.night : background.day;

  return (
    <View style={{position: 'absolute'}}>
      <Image
        style={{width: windowWidth, height: windowHeight, left: 0, top: 0}}
        source={backgroundSource}
      />
    </View>
  );
}
