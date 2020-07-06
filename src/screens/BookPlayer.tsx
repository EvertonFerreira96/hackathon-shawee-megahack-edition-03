import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image,SafeAreaView, Text,Modal, View } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {Slider} from 'react-native-elements'
import Constants from 'expo-constants'
import { useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';

import maisa01 from '../assets/maisa01.png';

const rewardsBook = require('../assets/rewardsBook.png');

import { useState } from 'react';

export default function TabOneScreen({ navigation }: StackScreenProps<RootStackParamList, 'TabOneScreen'>) {
  const [musicValue, setMusicValue] = useState(0);
  const route = useRoute();
  const project = route.params.project;

  const [heart, setHeart] = useState(false)
  
  const [modalVisible, setModalVisible] = useState(false);

  const rewardsPoints = '+ 10 pontos';
  const rewardsTitle = 'Parabéns, Anne!';
  const rewardsDescription = 'Você leu 22 páginas hoje. Recompensa merecida, hein!';


  return (
  <>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width: '100%', padding:25, marginTop: Constants.statusBarHeight-15}}>
       <TouchableOpacity onPress={() => setModalVisible(true)}>
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


      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>         
          <View style={styles.modalView}>
            <TouchableOpacity style={{position: 'absolute', top:15, right:15}} onPress={() => { setModalVisible(false)
             navigation.goBack() }  }>
              <FontAwesome name="close" size={24} color="#333" />
            </TouchableOpacity> 
            <Image source={rewardsBook} />
            <Text style={{color: '#8452EE',padding:5, fontSize:32}}>{rewardsPoints}</Text>
            <Text style={{color: '#333', padding:5, fontSize:22, fontWeight: '700'}}>{rewardsTitle}</Text>
            <Text style={{textAlign: 'center', padding:5, fontSize:16}}>{rewardsDescription}</Text>
            <View style={{backgroundColor:'#8452EE', paddingHorizontal: 100, paddingVertical:10, marginTop:50 }}>
              <TouchableOpacity onPress={() => navigation.replace('Store')} ><Text style={{color: '#FFF', fontWeight: '700'}}>Ir para loja</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>

  </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    margin:30
  },
  modalView: {
    position: 'relative',
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});