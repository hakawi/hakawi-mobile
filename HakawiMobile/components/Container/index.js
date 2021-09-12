import * as React from 'react';
import {View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Container(props) {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        padding: 30,
        ...props.style,
      }}>
      {props.children}
    </View>
  );
}
