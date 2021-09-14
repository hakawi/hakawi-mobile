import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';

export default function Heart(props) {
  const {initialHealthPercent = 100} = props;

  const heartState = {
    green: require('../../assets/images/health_progress/heart.png'),
    red: require('../../assets/images/health_progress/heart_red.png'),
  };

  const [mainColor, setMainColor] = useState(colors.main);
  const [heartSource, setHeartSource] = useState(heartState.green);
  const [healthPercent, setHealthPercent] = useState(initialHealthPercent);

  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{zIndex: 2, position: 'relative'}}>
        <Image style={{width: 68, height: 58}} source={heartSource} />
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
              {healthPercent}%
            </ChakraPetchBoldText>
          </View>
        </View>
      </View>
    </View>
  );
}
