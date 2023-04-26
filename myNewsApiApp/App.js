import React, {useState, useEffect, useRef} from 'react';
import {StatusBar, useColorScheme, Easing, AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Details from './src/screens/Details';
import Webview from './src/screens/Webview';
import Navbar from './src/components/Navbar';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/screens/Navigation';
import DrawerNavigation from './src/screens/DrawerNavigation';
import DeviceInfo from 'react-native-device-info';

const Stack = createStackNavigator();

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 50,
//     easing: Easing.linear,
//   },
// };

const App = () => {
  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor={backColor}
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          // translucent={true}
        />
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            //...TransitionPresets.SlideFromRightIOS

            // transitionSpec: {
            //   open: config,
            //   close: closeConfig,
            // }
          }}
          initialRouteName="DrawerNavigation">
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{
              header: ({navigation}) => (
                <Navbar navigation={navigation} home={true} />
              ),
            }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{
              header: ({navigation}) => (
                <Navbar navigation={navigation} home={true} />
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              header: ({navigation}) => (
                <Navbar navigation={navigation} home={false} />
              ),
            }}
          />
          <Stack.Screen
            name="Webview"
            component={Webview}
            options={{
              header: ({navigation}) => (
                <Navbar navigation={navigation} home={false} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
