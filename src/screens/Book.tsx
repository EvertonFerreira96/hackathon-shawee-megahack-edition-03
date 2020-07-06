import * as React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Modal, Alert, Image, Text, View, SafeAreaView, ViewPropTypes, FlatList, ScrollView, CheckBox, Switch } from 'react-native';
import Constants from 'expo-constants'
import { RootStackParamList } from '../types';
import { FontAwesome, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons'
import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';



export default function Book({ navigation }: StackScreenProps<RootStackParamList, 'Book'>) {

  //const navigation = useNavigation();
  const route = useRoute();
  const project = route.params.project;

  const songs = [
    {id:1,autor:'Everton Ferreira', chapter: 'Introdução', minutes: 12},
    {id:2,autor:'Everton Ferreira', chapter: 'Capitulo 1- Mulheres da Ciência', minutes: 12},
    {id:3,autor:'Everton Ferreira', chapter: 'Capitulo 2- Mulheres da Medicina', minutes: 6},
    {id:4,autor:'Everton Ferreira', chapter: 'Capitulo 3- Mulheres da Espionagem', minutes: 9},
    {id:5,autor:'Everton Ferreira', chapter: 'Capitulo 4- Mulheres da Inovação', minutes: 21},
    {id:6,autor:'Everton Ferreira', chapter: 'Capitulo 5- Mulheres da Aventura', minutes: 15},
  ];

  const [viewOption, setViewOption] = useState(true);
  const [offline, setOffline] = useState(false);

  return (
    <>
      <View style={styles.containerHeader}>
        <Image source={project.img} style={styles.image} resizeMode='cover' />
        <View style={styles.containerOptions}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#FFF" style={styles.action} />
          </TouchableOpacity>
          <View style={styles.options}>
            <Feather name="heart" size={24} color="#FFF" style={styles.action} />
            <Feather name="share-2" size={24} color="#FFF" style={styles.action} />
          </View>
        </View>
      </View>

      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>Disponível Offiline</Text>
        <Switch value={offline} onValueChange={()=> setOffline(!offline)} trackColor={{true: '#42C2B5', false: '#FFF'}}/>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.title}>Wonder Woman</Text>
        <Text style={styles.titleDescription}>25 mulheres inovadoras, inventoras e pioneiras que fizeram a diferença</Text>
        <Text style={styles.description}>Autor(a): <Text style={styles.values}>Sam Maggs</Text> </Text>
        <Text style={styles.description}>Editora: <Text style={styles.values}>Primavera Editorial</Text> </Text>
        <Text style={styles.description}>Edição: <Text style={styles.values}>1º ed. </Text> </Text>
        <Text style={styles.description}>Publicado em: <Text style={styles.values}>2017</Text> </Text>
      </View>

      <View style={{flexDirection:'row', alignItems: 'center', padding:10}}>
        <TouchableOpacity onPress={() => setViewOption(true)} style={[viewOption ? {borderBottomColor: '#42C2B5'} : {borderBottomColor: '#FFF'}, {marginRight: 15, borderBottomWidth:3, paddingBottom:15}]} ><Text style={[viewOption ? {color: '#42C2B5'} : {color: '#E5E5E5'}, {fontSize: 16, fontWeight:'500'}]} >Informações</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setViewOption(false)} style={[!viewOption ? {borderBottomColor: '#42C2B5'} : {borderBottomColor: '#FFF'},{marginRight: 15, borderBottomWidth:3, paddingBottom:15}]} ><Text style={[!viewOption ? {color: '#42C2B5'} : {color: '#E5E5E5'},{fontSize: 16, fontWeight:'500'}]} >Capitulos</Text></TouchableOpacity>
      </View>
      { viewOption ?
      
        <ScrollView
        horizontal={false}
        style={{}}
        >
          <View style={{padding:10}}>
            <Text style={{fontSize:15,lineHeight:20,textAlign:'justify'}}>
              Agora pense no quão especial alguém deve ser para conseguir os mesmos resultados quando nada ao redor conspira a seu favor.
          </Text>
          <Text style={{fontSize:15,lineHeight:20,textAlign:'justify'}}>
            Em “Wonder Women”, o leitor conhecerá mulheres além de seu tempo. Pessoas brilhantes, que se recusaram a se acomodar no papel de coadjuvantes e foram à luta, tornando-se protagonistas de sua própria vida. Cientistas, engenheiras, matemáticas, aventureiras e inventoras cujos feitos mudaram os rumos da história.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('BookPlayer',{project})} style={{backgroundColor: '#42C2B5', padding: 10, marginVertical:5, marginHorizontal:20, justifyContent: 'center', alignItems: 'center', borderRadius:5 }}>
            <Text style={{color: '#FFF', fontWeight: '700', padding:5}}> Ler agora</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={{backgroundColor: '#8452EE', padding: 10, marginVertical:5, marginHorizontal:20, justifyContent: 'center', alignItems: 'center', borderRadius:5 }}>
            <Text style={{color: '#FFF', fontWeight: '700', padding:5}}> Indicar para um amigo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:1 ,borderColor: '#8452EE', padding: 10,marginVertical:5, marginHorizontal:20,flexDirection:'row', justifyContent: 'center', alignItems: 'center', borderRadius:5 }}>
            <FontAwesome5 name="book-open" size={20} color="#8452EE" />
            <Text style={{color: '#8452EE', fontWeight: '700', padding:5}}>Compartilhar com todos</Text>
          </TouchableOpacity>
        </ScrollView>
        : 
        <ScrollView
        horizontal={false}
        >
        { songs.map(song => (
          <TouchableOpacity key={song.id} onPress={() => {navigation.navigate('MusicPlay', {song,project})}}>
            <View style={{ paddingHorizontal: 25, paddingVertical: 5, margin: 10, backgroundColor: '#E5E5E5', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
              <View style={{ }}>
                <Text style={{ textAlign: 'left', padding: 5, fontWeight: '700', color:'#4F4F4F',fontSize:16}}>{song.chapter}</Text>
                <Text style={{ textAlign: 'left', padding: 5, fontWeight: '400', color:'#4F4F4F',fontSize:14}}>{song.minutes}min</Text>
              </View>
              <AntDesign name="play" size={24}  color="#42C2B5" />
            </View>
          </TouchableOpacity>
        
       ))
      }
       </ScrollView>
      }


  
    </> 
  )
}
const styles = StyleSheet.create({
  containerHeader: {
    flexWrap: 'wrap',
    position: 'relative',
  },
  image:{
    width: '100%',
    height:200
  },
  containerOptions:{
    paddingTop: Constants.statusBarHeight+10,
    position:'absolute',
    backgroundColor: '#000',
    opacity:0.6, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:15
  },
  options:{
    flexDirection: 'row',
  },
  action:{
    paddingHorizontal:10,
    paddingVertical: 5
  },
  offlineContainer: {
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderColor: '#E5E5E5',
    borderWidth: 1
  },
  offlineText:{
    fontWeight: '700',
    fontSize: 16,
  },
  description:{
    fontWeight: '700', 
    paddingVertical: 5,
  },
  values:{
    fontWeight: '400'
  },
  informationContainer:{
    padding:10
  },
  title:{
    fontWeight: '900',
    textAlign:'justify',
    fontSize:22,
    paddingVertical:2
  },
  titleDescription:{
    fontWeight: '800',
    fontSize:16,
    paddingVertical:2

  },
  
});