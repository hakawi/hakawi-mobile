import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import BungeeInlineText from '../Text/BungeeInlineText';
import colors from '../../utils/colors';

export default function ShadowButton(props) {
  const {mainBackground = colors.main, shadowBackground = colors.secondary} =
    props;
  return (
    <TouchableOpacity
      style={{position: 'relative', ...props.style}}
      onPress={props.onPress}>
      <View
        style={{
          backgroundColor: mainBackground,
          padding: 10,
          borderRadius: 10,
          position: 'relative',
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BungeeInlineText
          style={{color: 'white', fontSize: 22, ...props.textStyle}}>
          {props.children}
        </BungeeInlineText>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 0,
          backgroundColor: shadowBackground,
          padding: 10,
          borderRadius: 10,
          width: '100%',
          left: 3,
          top: 3,
        }}>
        <BungeeInlineText
          style={{color: shadowBackground, fontSize: 22, ...props.textStyle}}>
          {props.children}
        </BungeeInlineText>
      </View>
    </TouchableOpacity>
  );
}
