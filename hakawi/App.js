import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import MissionScreen from './screens/MissionScreen';
import MissionDetailScreen from './screens/MissionDetailScreen';
import CompletedScreen from './screens/CompletedScreen';
import NewItemScreen from './screens/NewItemScreen';
import FaceDetectionScreen from './screens/FaceDetectionScreen';
import TensorCameraScreen from './screens/TensorCameraScreen';

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
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="Mission"
          component={MissionScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="MissionDetail"
          component={MissionDetailScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="Completed"
          component={CompletedScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="NewItem"
          component={NewItemScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="FaceDetection"
          component={FaceDetectionScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="TensorCamera"
          component={TensorCameraScreen}
          options={{
            animation: 'fade',
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
