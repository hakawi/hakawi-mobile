import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';

export default function HealthProgress(props) {
  const {
    initialHealthPercent = 100,
    initialHealthWidth = 320,
    defaultHealthWidth = 320,
  } = props;
  const [healthPercent, setHealthPercent] = useState(initialHealthPercent);
  const [healthWidth, setHealthWidth] = useState(initialHealthWidth);
  useEffect(() => {
    let myInterval = setInterval(() => {
      setHealthWidth(healthWidth - 1);
      if (healthWidth === 0) {
        setHealthWidth(initialHealthWidth);
      }
      setHealthPercent(parseInt((healthWidth * 100) / defaultHealthWidth));
    }, 10);
    return () => {
      clearInterval(myInterval);
    };
  });
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
              {healthPercent}%
            </ChakraPetchBoldText>
          </View>
        </View>
      </View>
      <View
        style={{
          width: healthWidth,
          height: 33,
          backgroundColor: colors.main,
          zIndex: 1,
          position: 'absolute',
          borderRadius: healthWidth >= defaultHealthWidth - 10 ? 10 : 0,
          left: 30,
        }}></View>
      <View
        style={{
          width: 320,
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
