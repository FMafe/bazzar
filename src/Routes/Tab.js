import React from 'react';

{/*Telas */ }
import Home from '../Pages/Home';
import Categorias from '../Pages/Categorias';
import Sobre from '../Pages/Sobre';
import Cartoes from '../Pages/Cartoes';

{/*Icones*/ }

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#010101',
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="navicon" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="store" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cartoes"
        component={Cartoes}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="credit-card" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;