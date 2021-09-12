import * as React from 'react';
import {View} from 'react-native';
import Container from '../components/Container/index';
import HealthProgress from '../components/HealthProgress/index';
import WorkTracking from '../components/WorkTracking/index';
import BottomButton from '../components/BottomButton/index';
import PlantBackground from '../components/PlantBackground/index';

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
