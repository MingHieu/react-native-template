import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Home, LoginScreen, SplashScreen } from '~views';
import {
  BottomTabParamList,
  InsideStackParamList,
  OutsideStackParamList,
  RootStackParamList,
} from './types';

const OutsideStack = createNativeStackNavigator<OutsideStackParamList>();
const OutsideRouter = () => {
  return (
    <OutsideStack.Navigator>
      <OutsideStack.Screen name={'LoginScreen'} component={LoginScreen} />
    </OutsideStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomRouter = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
};

const InsideStack = createNativeStackNavigator<InsideStackParamList>();
const InsideRouter = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name={'BottomTab'} component={BottomRouter} />
    </InsideStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={'SplashScreen'} component={SplashScreen} />
        <RootStack.Screen name={'OutsideStack'} component={OutsideRouter} />
        <RootStack.Screen name={'InsideStack'} component={InsideRouter} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
