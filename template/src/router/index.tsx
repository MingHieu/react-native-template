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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '~shared/hooks';

const OutsideStack = createNativeStackNavigator<OutsideStackParamList>();
const OutsideRouter = () => {
  return (
    <OutsideStack.Navigator>
      <OutsideStack.Screen name={'LoginScreen'} component={LoginScreen} />
    </OutsideStack.Navigator>
  );
};

const BottomTabIcons: { [key in keyof BottomTabParamList]: JSX.Element } = {
  Home: <FontAwesome name="home" size={23} />,
};
const BottomTabLabels: { [key in keyof BottomTabParamList]: string } = {
  Home: 'Trang chủ',
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomRouter = () => {
  const { color: themeColor } = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: themeColor.primary,
        tabBarIcon: ({ color }) =>
          React.cloneElement(BottomTabIcons[route.name], { color }),
        tabBarLabel: BottomTabLabels[route.name],
      })}>
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
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name={'SplashScreen'} component={SplashScreen} />
          <RootStack.Screen name={'OutsideStack'} component={OutsideRouter} />
          <RootStack.Screen
            name={'InsideStack'}
            component={InsideRouter}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRouter;
