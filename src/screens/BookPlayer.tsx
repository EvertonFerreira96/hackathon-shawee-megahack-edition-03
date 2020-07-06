import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image,SafeAreaView, Text, View } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {Slider} from 'react-native-elements'
import Constants from 'expo-constants'
import { useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';

import maisa01 from '../assets/maisa01.png'

import { useState } from 'react';

export default function TabOneScreen({ navigation }: StackScreenProps<RootStackParamList, 'TabOneScreen'>) {
  const [musicValue, setMusicValue] = useState(0);
  const route = useRoute();
  const project = route.params.project;

  const [heart, setHeart] = useState(false)

  return (
  <>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width: '100%', padding:25, marginTop: Constants.statusBarHeight-15}}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign  name="left" size={24} color="#000" />
       </TouchableOpacity> 
       <TouchableOpacity onPress={() => null}>
        <Feather name="settings" size={24} color="#000" />
       </TouchableOpacity> 
       
    </View> 
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center', margin:25}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={maisa01} />
      </View>  
 
   { /*<Text>Value: {musicValue}</Text> */}
   </View>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end', width: '100%',padding: 25}} > 
        <Slider
          value={musicValue}
          onValueChange={(value) => setMusicValue(value)}
          style={{ width: '100%', }}
          thumbTintColor={'#42C2B5'}
          minimumTrackTintColor={'#42C2B5'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View><Text>{Math.trunc(musicValue * 129)}</Text></View>
          <View><Text>129</Text></View>
        
        </View>
      </View>
  </>
  );
}

const styles = StyleSheet.create({

});