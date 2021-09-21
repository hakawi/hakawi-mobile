import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';
import theme from '../../constants/theme';

export default function HealthProgress(props) {
  const {
    healthPercent,
    initialHealthWidth = 280,
    defaultHealthWidth = 280,
    defaultHeartIconHeight = 55,
    defaultProgessBarHeight = 28,
    themeMode,
  } = props;

  const heartState = {
    green: require('../../assets/images/health_progress/heart.png'),
    red: require('../../assets/images/health_progress/heart_red.png'),
  };

  const healthWidth = initialHealthWidth * (healthPercent / 100);
  const healthSource =
    themeMode === theme.day ? heartState.green : heartState.red;
  const mainColor = themeMode === theme.day ? colors.main : colors.red;

  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        height: defaultHeartIconHeight,
      }}>
      <View
        style={{
          zIndex: 2,
          position: 'absolute',
          left: defaultHeartIconHeight * -1 + 20,
        }}>
        <Image
          style={{
            width: 68 * (defaultHeartIconHeight / 58),
            height: defaultHeartIconHeight,
          }}
          source={healthSource}
        />
        <View
          style={{
            width: 68 * (defaultHeartIconHeight / 58) + 2,
            height: defaultHeartIconHeight - 2,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ChakraPetchBoldText
            style={{
              fontSize: 16,
              color: 'white',
              textShadowRadius: 0,
              textShadowColor: 'white',
            }}>
            {healthPercent}%
          </ChakraPetchBoldText>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            position: 'absolute',
            width: healthWidth,
            height: defaultProgessBarHeight,
            backgroundColor: mainColor,
            zIndex: 1,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderRadius: healthWidth >= defaultHealthWidth - 10 ? 10 : 0,
          }}></View>
        <View
          style={{
            width: initialHealthWidth,
            height: defaultProgessBarHeight,
            backgroundColor: 'white',
            borderRadius: 10,
            zIndex: 0,
            borderWidth: 2,
            borderColor: mainColor,
          }}></View>
      </View>
    </View>
  );
}
