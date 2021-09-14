import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import colors from '../../utils/colors';

export default function WorkTracking(props) {
  const {initialHour = 0, initialMinute = 0, initialSeconds = 0} = props;
  const [hours, setHours] = useState(initialHour);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [mainColor, setMainColor] = useState(colors.main);
  useEffect(() => {
    let myInterval = setInterval(() => {

    }, 10 );
    return () => {
      clearInterval(myInterval);
    };
  });
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
          fontSize: 75,
          color: mainColor,
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 0,
          textShadowColor: 'white',
          width: 330,
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
          YOU SHOULD FOCUS ON YOUR WORK
        </ChakraPetchBoldText>
      </View>
    </View>
  );
}
