import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';
import theme from '../../constants/theme';
import colors from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OverlayBackground(props) {
  const {themeMode} = props;

  return (
    <View
      style={{
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: colors.green,
        opacity: 0.87,
        zIndex: 1,
        left: 0,
        top: 0,
      }}></View>
  );
}
