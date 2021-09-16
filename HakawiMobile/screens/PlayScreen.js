import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Container from '../components/Container';
import HealthProgress from '../components/HealthProgress';
import WorkTracking from '../components/WorkTracking';
import BottomButton from '../components/BottomButton';
import PlantBackground from '../components/PlantBackground';

export default function PlayScreen({navigation}) {
  const initialHour = 0;
  const initialMinute = 0;
  const initialSeconds = 0;
  const initialHealthPercent = 100;
  const maximumHealthSeconds = 14400; // 4 hours
  const [hours, setHours] = useState(initialHour);
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinute);
  const [mainColor, setMainColor] = useState(colors.main);
  const [healthPercent, setHealthPercent] = useState(initialHealthPercent);

  useEffect(() => {
    let myInterval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      if (minutes === 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
      const _totalSeconds = totalSeconds + 1;
      setTotalSeconds(_totalSeconds);
      const _healthPercent =
        100 - parseInt((_totalSeconds * 100) / maximumHealthSeconds);
      if (_healthPercent <= 0) {
        setHealthPercent(0);
      } else {
        setHealthPercent(_healthPercent);
      }
    }, 10);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Container>
      <PlantBackground />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <HealthProgress healthPercent={healthPercent} />
          <WorkTracking
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            mainColor={mainColor}
          />
        </View>
        <BottomButton navigation={navigation} />
      </View>
    </Container>
  );
}
