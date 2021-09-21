import * as React from 'react';
import {Text} from 'react-native';

export default function BungeeInlineText(props) {
  return (
    <Text style={{fontFamily: 'BungeeInline-Regular', ...props.style}}>
      {props.children}
    </Text>
  );
}
