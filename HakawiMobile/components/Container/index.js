import * as React from 'react';
import {View} from 'react-native';

export default function Container(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 30, ...props.style}}>
      {props.children}
    </View>
  );
}
