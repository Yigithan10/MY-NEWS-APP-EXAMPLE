import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Popular from './Popular';
import Home from './Home';
import Search from './Search';
import {useColorScheme, BackHandler} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: color,
        tabBarStyle: {backgroundColor: backColor},
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarPressColor: color
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{tabBarLabel: 'Popular'}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
