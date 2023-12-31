import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import Wishlist from '../screens/wishlist';
import History from '../screens/history';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerIcon = ({focused, size}, name) => {
    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          drawerIcon: options => drawerIcon(options, 'home-outline'),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerIcon: options => drawerIcon(options, 'heart-outline'),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerIcon: options => drawerIcon(options, 'history'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: '#009688',
  active: '#fff',
  inactive: '#eee',
};
