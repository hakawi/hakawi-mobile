import * as React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const colors = {
  main: '#98B352',
  secondary: '#B9DC57',
};

function BungeeInlineText(props) {
  return (
    <Text style={{fontFamily: 'BungeeInline-Regular', ...props.style}}>
      {props.children}
    </Text>
  );
}

function ChakraPetchBoldText(props) {
  return (
    <Text style={{fontFamily: 'ChakraPetch-Bold', ...props.style}}>
      {props.children}
    </Text>
  );
}

function ShadowButton(props) {
  return (
    <TouchableOpacity
      style={{position: 'relative', ...props.style}}
      onPress={props.onPress}>
      <View
        style={{
          backgroundColor: colors.main,
          padding: 10,
          borderRadius: 10,
          position: 'relative',
          zIndex: 1,
        }}>
        <BungeeInlineText style={{color: 'white', fontSize: 22}}>
          {props.children}
        </BungeeInlineText>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 0,
          backgroundColor: colors.secondary,
          padding: 10,
          borderRadius: 10,
          left: 5,
          top: 5,
        }}>
        <BungeeInlineText style={{color: 'white', fontSize: 22}}>
          {props.children}
        </BungeeInlineText>
      </View>
    </TouchableOpacity>
  );
}

function WorkTracking() {
  return (
    <View style={{alignItems: 'center'}}>
      <ChakraPetchBoldText
        style={{
          fontSize: 20,
          color: colors.main,
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        WORK TRACKING
      </ChakraPetchBoldText>
      <ChakraPetchBoldText
        style={{
          fontSize: 75,
          color: colors.main,
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        01:23:31
      </ChakraPetchBoldText>
      <ChakraPetchBoldText
        style={{
          fontSize: 20,
          color: colors.main,
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
          textShadowColor: 'white',
        }}>
        YOU SHOULD FOCUS ON YOUR WORK
      </ChakraPetchBoldText>
    </View>
  );
}

function HealthProgress(props) {
  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{zIndex: 2, position: 'relative'}}>
        <Image
          style={{width: 68, height: 58}}
          source={require('./assets/images/health_progress/heart.png')}
        />
        <View
          style={{
            position: 'absolute',
            width: 70,
            height: 55,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ChakraPetchBoldText
              style={{
                fontSize: 20,
                color: 'white',
                textShadowRadius: 0,
                textShadowColor: 'white',
              }}>
              82%
            </ChakraPetchBoldText>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 178,
          height: 33,
          backgroundColor: colors.main,
          zIndex: 1,
          position: 'absolute',
          left: 30,
        }}></View>
      <View
        style={{
          width: 317,
          height: 33,
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 10,
          left: 30,
          zIndex: 0,
          borderWidth: 2,
          borderColor: colors.main,
        }}></View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FDFAE7',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          position: 'absolute',
          width: windowWidth,
        }}>
        <Image
          style={{width: 181, height: 193, left: 0, top: 0}}
          source={require('./assets/images/home/path_left.png')}
        />
        <Image
          style={{width: 182, height: 228, right: 0, top: 0}}
          source={require('./assets/images/home/path_right.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          position: 'absolute',
          width: windowWidth,
        }}>
        <Image
          style={{width: 286, height: 414, left: 0, top: 0}}
          source={require('./assets/images/home/man.png')}
        />
        <Image
          style={{width: 317, height: 252, right: 0, top: 153}}
          source={require('./assets/images/home/girl.png')}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <BungeeInlineText style={{fontSize: 100, color: colors.main}}>
          HAKAWI
        </BungeeInlineText>
        <BungeeInlineText style={{fontSize: 22, color: colors.main}}>
          #makeyourhealthbetter
        </BungeeInlineText>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ShadowButton
          onPress={() => {
            navigation.navigate('Play');
          }}>
          PLAY NOW
        </ShadowButton>
        <ShadowButton style={{marginTop: 15}}>SETTING</ShadowButton>
        <ShadowButton style={{marginTop: 15}}>HELP</ShadowButton>
      </View>
    </View>
  );
}

function PlayScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 10}}>
      <View style={{position: 'absolute'}}>
        <Image
          style={{width: windowWidth, height: windowHeight, left: 0, top: 0}}
          source={require('./assets/images/background.png')}
        />
      </View>
      <View>
        <HealthProgress></HealthProgress>
        <WorkTracking></WorkTracking>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
