import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {APP_SCREEN_TYPES} from './screenTypes';
import Home from '../view/Home/index';

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={APP_SCREEN_TYPES.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
