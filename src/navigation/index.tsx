import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity, Text } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
import Store from '../screens/Store';
import Book from '../screens/Book';
import MusicPlay from '../screens/MusicPlayer';
import BookPlayer from '../screens/BookPlayer';


export default function Navigation({ colorScheme }:{ colorScheme: ColorSchemeName }) {

  const rewardsPoints = '+ 10 pontos';
  const rewardsTitle = 'Parabéns, Anne!';
  const rewardsDescription = 'Você leu 22 páginas hoje. Recompensa merecida, hein!';

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
    },
  };
  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true,  }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: true,header: () => null, }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: true,header: () => null, }} />
      <Stack.Screen name="Store" component={Store} options={{ headerShown: true,header: () => null, }} />
      <Stack.Screen name="Book" component={Book} options={{ headerShown: true,header: () => null, }} />
     <Stack.Screen name="MusicPlay" component={MusicPlay} options={{ headerShown: true,header: () => null, }} />
     <Stack.Screen name="BookPlayer" component={BookPlayer} options={{ headerShown: true,header: () => null, }} />
    </Stack.Navigator>
  );
}
