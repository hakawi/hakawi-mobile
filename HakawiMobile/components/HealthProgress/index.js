import * as React from 'react';
import {View, Image} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';

export default function HealthProgress(props) {
  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{zIndex: 2, position: 'relative'}}>
        <Image
          style={{width: 68, height: 58}}
          source={require('../../assets/images/health_progress/heart.png')}
        />
        <View
          style={{
            position: 'absolute',
            width: 70,
            height: 55,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ChakraPetchBoldText
              style={{
                fontSize: 20,
                color: 'white',
                textShadowRadius: 0,
                textShadowColor: 'white',
              }}>
              82%
            </ChakraPetchBoldText>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 178,
          height: 33,
          backgroundColor: colors.main,
          zIndex: 1,
          position: 'absolute',
          left: 30,
        }}></View>
      <View
        style={{
          width: 317,
          height: 33,
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 10,
          left: 30,
          zIndex: 0,
          borderWidth: 2,
          borderColor: colors.main,
        }}></View>
    </View>
  );
}
