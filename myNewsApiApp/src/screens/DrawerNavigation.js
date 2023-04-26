import React, {useEffect} from 'react';
import {BackHandler, Dimensions, useColorScheme} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigation from './Navigation';
import Category from './Category';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const dimensions = Dimensions.get('screen');

const DrawerNavigation = props => {
  const {navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <Drawer.Navigator
      initialRouteName="Navigation"
      screenOptions={{
        drawerStyle: {
          backgroundColor: backColor,
          height: dimensions.height,
        },
        headerStyle: {
          backgroundColor: backColor,
        },
        headerTintColor: color,
        drawerInactiveTintColor: color,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: color,
        headerShown: true,
      }}>
      <Drawer.Screen
        name="Navigation"
        component={Navigation}
        options={{
          headerTitle: ' ',
          title: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryGeneral"
        component={Category}
        initialParams={{category: 'general'}}
        options={{
          headerTitle: 'General News',
          title: 'General',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'grid-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryBusiness"
        component={Category}
        initialParams={{category: 'business'}}
        options={{
          headerTitle: 'Business News',
          title: 'Business',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'business-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryTechnology"
        component={Category}
        initialParams={{category: 'technology'}}
        options={{
          headerTitle: 'Technology News',
          title: 'Technology',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'phone-portrait-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryScience"
        component={Category}
        initialParams={{category: 'science'}}
        options={{
          headerTitle: 'Science News',
          title: 'Science',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'planet-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryHealth"
        component={Category}
        initialParams={{category: 'health'}}
        options={{
          headerTitle: 'Health News',
          title: 'Health',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'medkit-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategorySports"
        component={Category}
        initialParams={{category: 'sports'}}
        options={{
          headerTitle: 'Sports News',
          title: 'Sports',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'football-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryEntertainment"
        component={Category}
        initialParams={{category: 'entertainment'}}
        options={{
          headerTitle: 'Entertainment News',
          title: 'Entertainment',
          drawerIcon: ({focused, size, color}) => (
            <Icon name={'people-outline'} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
