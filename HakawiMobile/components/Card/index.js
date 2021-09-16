import React from 'react';
import {View} from 'react-native';
import colors from '../../utils/colors';

export default function Card(props) {
  const {style, children, width, height} = props;
  return (
    <View
      style={{
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.main,
        backgroundColor: colors.yellow,
        width: width,
        height: height,
        ...style,
      }}>
      {children}
    </View>
  );
}
