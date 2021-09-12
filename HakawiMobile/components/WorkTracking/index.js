import * as React from 'react';
import {View} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';

export default function WorkTracking() {
  return (
    <View style={{alignItems: 'center'}}>
      <ChakraPetchBoldText
        style={{
          fontSize: 20,
          color: colors.main,
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        WORK TRACKING
      </ChakraPetchBoldText>
      <ChakraPetchBoldText
        style={{
          fontSize: 75,
          color: colors.main,
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        01:23:31
      </ChakraPetchBoldText>
      <ChakraPetchBoldText
        style={{
          fontSize: 20,
          color: colors.main,
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        YOU SHOULD FOCUS ON YOUR WORK
      </ChakraPetchBoldText>
    </View>
  );
}
