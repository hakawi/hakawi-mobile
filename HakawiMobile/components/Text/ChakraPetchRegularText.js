import * as React from 'react';
import {Text} from 'react-native';

export default function ChakraPetchRegularText(props) {
  return (
    <Text style={{fontFamily: 'ChakraPetch-Regular', ...props.style}}>
      {props.children}
    </Text>
  );
}
