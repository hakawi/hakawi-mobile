import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

export default function MissionDetailScreen({navigation}) {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      const _totalSeconds = totalSeconds + 1;
      if (_totalSeconds === 1) {
        navigation.navigate('Completed');
      }
      setTotalSeconds(_totalSeconds);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Container style={{alignItems: 'center'}}>
      <PlantBackground />
      <BackButton navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Card style={{flex: 1, margin: 30}} height={250} />
      </View>
    </Container>
  );
}
