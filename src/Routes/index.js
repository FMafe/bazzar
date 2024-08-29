import React from 'react';

{/*Telas */ }

import Detalhes from '../Pages/Detalhes';

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './Tab';

const Stack = createStackNavigator();


function Routes() {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
};


export default Routes;