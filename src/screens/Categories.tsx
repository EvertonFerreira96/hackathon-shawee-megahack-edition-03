import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { RootStackParamList } from '../types';
import { FlatList } from 'react-native-gesture-handler';

const destaqueCienciasHumanas = require('../assets/destaque-ciencias-humanas.png');
const destaqueContos = require('../assets/destaque-contos.png');
const destaqueEducacao = require('../assets/destaque-educacao.png');
const destaqueHQ = require('../assets/destaque-historias-em-quadrinhos.png');
const destaqueLiteratura = require('../assets/destaque-literatura.png');
const destaqueLiteraturaInfantoJuvenil = require('../assets/destaque-literatura-infanto-juvenil.png');

const categoryArtes = require('../assets/artes.png');
const categoryAutoAjuda = require('../assets/auto-ajuda.png');
const categoryAutoBiografia = require('../assets/biografias-autobiografias.png');
const categoryCasaLar = require('../assets/casa-e-lar.png');
const categoryCienciaNatureza = require('../assets/ciencia-e-natureza.png');
const categoryCienciasHumanasSociais = require('../assets/ciencias-humanas-e-sociais.png');
const categoryContos = require('../assets/contos.png');
const categoryEducacao = require('../assets/educacao.png');
const categoryEsoterismo = require('../assets/esoterismo.png');
const categoryFantasia = require('../assets/fantasia.png');
const categoryFiccaoCientifica = require('../assets/ficcao-cientifica.png');
const categoryGames = require('../assets/games.png');
const categoryHQ = require('../assets/historia-em-quadrinhos.png');
const categoryLendasMitos = require('../assets/lendas-e-mitos.png');
const categoryLiteraturaInfantoJuvenil = require('../assets/literatura-infanto-juvenil.png');
const categoryLiteratura = require('../assets/literatura.png');
const categoryMatematica = require('../assets/matematica.png');
const categoryMisterioPolicialTerror = require('../assets/misterio-policial-terror.png');

export default function TabOneScreen({ navigation }: StackScreenProps<RootStackParamList, 'TabOneScreen'>) {
  const highlightsCategories = [
    {id:'01', img:destaqueCienciasHumanas},
    {id:'02', img:destaqueContos},
    {id:'03', img:destaqueEducacao},
    {id:'04', img:destaqueHQ},
    {id:'05', img:destaqueLiteratura},
    {id:'06', img:destaqueLiteraturaInfantoJuvenil},
  ];
 const categories = [
    {id:'02', img:categoryArtes}, 
    {id:'03', img:categoryAutoAjuda}, 
    {id:'04', img:categoryAutoBiografia}, 
    {id:'05', img:categoryCasaLar}, 
    {id:'06', img:categoryCienciaNatureza}, 
    {id:'07', img:categoryCienciasHumanasSociais}, 
    {id:'08', img:categoryContos}, 
    {id:'09', img:categoryEducacao}, 
    {id:'10', img:categoryEsoterismo}, 
    {id:'11', img:categoryFantasia}, 
    {id:'12', img:categoryFiccaoCientifica}, 
    {id:'13', img:categoryGames}, 
    {id:'14', img:categoryHQ}, 
    {id:'15', img:categoryLendasMitos}, 
    {id:'16', img:categoryLiteraturaInfantoJuvenil}, 
    {id:'17', img:categoryLiteratura}, 
    {id:'18', img:categoryMatematica}, 
    {id:'19', img:categoryMisterioPolicialTerror}, 
 ];
  return (
  <>
    <SafeAreaView style={styles.container}>
        <Text style={styles.titleHighlights}>Em destaque</Text>
        <FlatList
          style={styles.listHighlights}
          data={highlightsCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Image source={project.img} resizeMode='contain' style={styles.highLight} width={200}/> )}
            />

        <Text style={styles.title}>Todas as categorias</Text>
        <FlatList
          style={styles.listCategories}
          data={categories}
          horizontal={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Image source={project.img} resizeMode='contain' style={styles.categories} /> )}
        />    
    </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  titleHighlights:{
    color: '#000',
    fontWeight: '700',
    fontSize:16,
    paddingVertical:10,
    marginBottom:0,
    marginTop:5,
  },
  title:{
    color: '#000',
    fontWeight: '700',
    fontSize:16,
    paddingVertical:10,
    marginBottom:15
  },
  container: {
    flex: 1,
    margin:0,
    padding:0,
    lineHeight:0,
    marginHorizontal: 15,
  },
  highLight:{
    flex: 1,
    marginRight: 5,
  },
  categories:{
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    marginBottom: 15
    
  },
  listHighlights:{
    minHeight:200,
    backgroundColor: '#fff',
    marginBottom:5
  },
  listCategories:{
    minHeight:200,
    backgroundColor: '#fff',
  }
});
