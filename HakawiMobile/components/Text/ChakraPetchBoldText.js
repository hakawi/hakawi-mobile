import * as React from 'react';
import {Text} from 'react-native';

export default function ChakraPetchBoldText(props) {
  return (
    <Text style={{fontFamily: 'ChakraPetch-Bold', ...props.style}}>
      {props.children}
    </Text>
  );
}
