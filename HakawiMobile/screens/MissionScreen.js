import * as React from 'react';
import Container from '../components/Container';
import PlantBackground from '../components/PlantBackground';
import BackButton from '../components/BackButton';

export default function MissionScreen({navigation}) {
  return (
    <Container>
      <PlantBackground />
      <BackButton navigation={navigation} />
    </Container>
  );
}
