import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import ChakraPetchBoldText from '../Text/ChakraPetchBoldText';
import ChakraPetchRegularText from '../Text/ChakraPetchRegularText';
import ShadowButton from '../Button/ShadowButton';
import Card from '../Card';
import colors from '../../utils/colors';

export default function MissionCard(props) {
  const {style, title, description, image, navigation, onPress} = props;
  return (
    <Card
      width={193}
      height={ 247}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}>
      <Image style={{width: 162, height: 96}} source={image} />
      <ChakraPetchBoldText
        style={{
          fontSize: 16,
          color: colors.main,
          marginTop: 5,
        }}>
        {title}
      </ChakraPetchBoldText>
      <ChakraPetchRegularText
        style={{
          fontSize: 10,
          color: colors.main,
          marginTop: 5,
        }}>
        {description}
      </ChakraPetchRegularText>
      <View>
        <ShadowButton
          style={{marginTop: 15}}
          textStyle={{fontSize: 13}}
          onPress={onPress}>
          Let's start
        </ShadowButton>
      </View>
    </Card>
  );
}
