import { Ionicons,MaterialIcons,Foundation, Fontisto, AntDesign, Octicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import League from '../screens/League';
import { BottomTabParamList, TabHomeParamList, TabCategoriesParamList, TabLeagueParamList } from '../types';
import { Text } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const icons = {
    Início:{
      lib: AntDesign,
      name: 'home',
    size: 0,
  },
    Categorias:{
      lib: Fontisto,
      name: 'nav-icon-grid-a',
      size: 5,
  },
    Liga:{
      lib: Foundation,
      name: 'book-bookmark',
      size: -5,
  },
    Atividades:{ 
      lib: Feather,
      name: 'activity',
      size: 0,
  },
    Perfil:{ 
      lib: Octicons,
      name: 'person',
      size: 0,
  },
  };
  

    return (
    <BottomTab.Navigator
      initialRouteName="Início"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
            const { lib: Icon, name, size: sizeIcon } = icons[route.name];
          return <Icon name={name} size={size-sizeIcon} color={color} style={{marginTop:5}} />;
        },
      })}
      >
      <BottomTab.Screen
        name="Início"
        component={TabHomeNavigator}
        
      />
      <BottomTab.Screen
        name="Categorias"
        component={TabCategoriesNavigator}
        
      />
      <BottomTab.Screen
        name="Liga"
        component={TabLeagueNavigator}
      />
      <BottomTab.Screen
        name="Atividades"
        component={TabCategoriesNavigator}
       
      />
      <BottomTab.Screen
        name="Perfil"
        component={TabCategoriesNavigator}
        
      />
    </BottomTab.Navigator>
  );
}

const TabHome = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHome.Navigator>
      <TabHome.Screen
        name="TabHomeScreen"
        component={Home}
        options={{ header: () => <Text>asdad</Text> }}
      />
    </TabHome.Navigator>
  );
}

const TabCategoriesStack = createStackNavigator<TabCategoriesParamList>();

function TabCategoriesNavigator() {
  return (
    <TabCategoriesStack.Navigator>
      <TabCategoriesStack.Screen
        name="TabCategoriesScreen"
        component={Categories}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabCategoriesStack.Navigator>
  );
}


const TabLeagueStack = createStackNavigator<TabLeagueParamList>();

function TabLeagueNavigator() {
  return (
    <TabLeagueStack.Navigator>
      <TabLeagueStack.Screen
        name="TabLeagueScreen"
        component={League}
      />
    </TabLeagueStack.Navigator>
  );
}
