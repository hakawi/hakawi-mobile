import * as React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import BungeeInlineText from '../Text/BungeeInlineText';
import colors from '../../utils/colors';

export default function BottomButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          style={{width: 55, height: 55}}
          source={require('../../assets/images/bottom_button/mission.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 0}}>
        <Image
          style={{width: 66, height: 55}}
          source={require('../../assets/images/bottom_button/collectibles.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 10}}>
        <Image
          style={{width: 42, height: 48}}
          source={require('../../assets/images/bottom_button/market.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, marginLeft: 10}}>
        <Image
          style={{width: 42, height: 48}}
          source={require('../../assets/images/bottom_button/friends.png')}
        />
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
