import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';
import HealthProgress from '../components/HealthProgress/index';
import WorkTracking from '../components/WorkTracking/index';
import BottomButton from '../components/BottomButton/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PlayScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 30}}>
      <View style={{position: 'absolute'}}>
        <Image
          style={{width: windowWidth, height: windowHeight, left: 0, top: 0}}
          source={require('../assets/images/background.png')}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <HealthProgress></HealthProgress>
          <WorkTracking></WorkTracking>
        </View>
        <BottomButton></BottomButton>
      </View>
    </View>
  );
}
