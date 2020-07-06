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

import before15s from '../assets/before15s.png'
import after15s from '../assets/after15s.png'
import pause from '../assets/pause.png'

import { useState } from 'react';

export default function TabOneScreen({ navigation }: StackScreenProps<RootStackParamList, 'TabOneScreen'>) {
  const [musicValue, setMusicValue] = useState(0);
  const route = useRoute();
  const song = route.params.song;
  const project = route.params.project;

  const [heart, setHeart] = useState(false)

  return (
  <>
    <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems:'flex-end', width: '100%', padding:25, marginTop: Constants.statusBarHeight-15}}>
        <AntDesign onPress={() => navigation.goBack()} name="close" size={24} color="#000" />
    </View> 
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center', margin:25}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={project.img} />
        <Text>{song.chapter}</Text>
        <Text>{song.autor}</Text>
      </View>
        <Slider
          value={musicValue}
          onValueChange={(value) => setMusicValue(value)}
          style={{ width: '100%', }}
          thumbTintColor={'#42C2B5'}
          minimumTrackTintColor={'#42C2B5'}
        />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}} > 
     <View><Text>{ song.minutes * Math.trunc(musicValue*100) /100 }</Text></View>
        <View><Text>{song.minutes}:00</Text></View>
      </View>
      <View style={{flexDirection: 'row',alignItems: 'center' }} > 
        <TouchableOpacity onPress={() => setMusicValue(musicValue-(0.5/10))}> 
          <Image style={{margin:10}} source={before15s} /> 
          </TouchableOpacity> 
        <TouchableOpacity> 
          <Image style={{margin:10}} source={pause} /> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => setMusicValue(musicValue+(0.5/10))}>  
          <Image style={{margin:10}} source={after15s} />
        </TouchableOpacity> 
        
        
      </View>
      
 
   { /*<Text>Value: {musicValue}</Text> */}
   </View>
   <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', padding:25}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <Text>1.0x</Text>
         <TouchableOpacity onPress={() => setHeart(!heart)}>
          <AntDesign name={heart? "heart" : "hearto"} size={24} color="#000" />
         </TouchableOpacity> 
         <TouchableOpacity>
          <Feather name="share-2" size={24} color="#000" />
        </TouchableOpacity> 
        </View>
      </View>
  </>
  );
}

const styles = StyleSheet.create({

});