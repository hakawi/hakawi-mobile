import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export default function BottomButton(props) {
  const {themeMode} = props;

  const mission = {
    day: require('../../assets/images/bottom_button/mission.png'),
    night: require('../../assets/images/bottom_button/mission_night.png'),
  };
  const collectibles = {
    day: require('../../assets/images/bottom_button/collectibles.png'),
    night: require('../../assets/images/bottom_button/collectibles_night.png'),
  };
  const market = {
    day: require('../../assets/images/bottom_button/market.png'),
    night: require('../../assets/images/bottom_button/market_night.png'),
  };
  const friends = {
    day: require('../../assets/images/bottom_button/friends.png'),
    night: require('../../assets/images/bottom_button/friends_night.png'),
  };

  let missionSource = mission.day;
  let collectiblesSource = collectibles.day;
  let marketSource = market.day;
  let friendsSource = friends.day;

  if (themeMode === theme.night) {
    missionSource = mission.night;
    collectiblesSource = collectibles.night;
    marketSource = market.night;
    friendsSource = friends.night;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Mission');
        }}>
        <Image style={{width: 55, height: 55}} source={missionSource} />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 10}}>
        <Image style={{width: 66, height: 55}} source={collectiblesSource} />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 20}}>
        <Image style={{width: 42, height: 48}} source={marketSource} />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 20}}>
        <Image style={{width: 42, height: 48}} source={friendsSource} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {},
});
