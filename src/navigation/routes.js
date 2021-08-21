import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../utils/constants';

import Counters from '../screens/Counters';
import Config from '../screens/Config';

const BottomNavigation = createBottomTabNavigator();

const Routes = () => {
  return (
    <BottomNavigation.Navigator
      initialRouteName="Counters"
      screenOptions={{
        tabBarStyle: {position: 'absolute', backgroundColor: Colors.DarkBlue},
      }}
      options={{}}>
      <BottomNavigation.Screen
        name="Counters"
        component={Counters}
        options={{
          headerStyle: {
            backgroundColor: Colors.DarkBlue,
            height: 80,
          },
          headerTintColor: Colors.PlainWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
          },
          title: 'Counters',
          tabBarActiveTintColor: Colors.YellowGold,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="counter"
              color={focused ? Colors.YellowGold : Colors.PlainWhite}
              size={size}
            />
          ),
        }}
      />
      <BottomNavigation.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.DarkBlue,
            height: 80,
          },
          headerTintColor: Colors.PlainWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32,
          },
          title: 'Config',
          tabBarActiveTintColor: Colors.YellowGold,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="cog"
              color={focused ? Colors.YellowGold : Colors.PlainWhite}
              size={size}
            />
          ),
        }}
        name="Config"
        component={Config}
      />
    </BottomNavigation.Navigator>
  );
};

export default Routes;
