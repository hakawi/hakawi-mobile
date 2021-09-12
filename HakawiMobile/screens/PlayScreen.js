import * as React from 'react';
import {View} from 'react-native';
import Container from '../components/Container';
import HealthProgress from '../components/HealthProgress';
import WorkTracking from '../components/WorkTracking';
import BottomButton from '../components/BottomButton';
import PlantBackground from '../components/PlantBackground';

export default function PlayScreen({navigation}) {
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
          <HealthProgress />
          <WorkTracking />
        </View>
        <BottomButton navigation={navigation} />
      </View>
    </Container>
  );
}
