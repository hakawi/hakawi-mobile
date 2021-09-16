import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';
import theme from '../../constants/theme';

export default function WorkTracking(props) {
  const {hours, minutes, seconds, themeMode} = props;
  const mainColor =  themeMode == theme.day ? colors.main : colors.red;
  const recommendText =
    themeMode == theme.day ? 'YOU SHOULD FOCUS ON YOUR WORK' : 'TIME TO GO OUT';

  return (
    <View style={{alignItems: 'center'}}>
      <ChakraPetchBoldText
        style={{
          fontSize: 20,
          color: mainColor,
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        WORK TRACKING
      </ChakraPetchBoldText>
      <ChakraPetchBoldText
        style={{
          fontSize: 80,
          color: mainColor,
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 0,
          textShadowColor: 'white',
          width: 370,
        }}>
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </ChakraPetchBoldText>
      <View
        style={{
          backgroundColor: mainColor,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}>
        <ChakraPetchBoldText
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          {recommendText}
        </ChakraPetchBoldText>
      </View>
    </View>
  );
}
