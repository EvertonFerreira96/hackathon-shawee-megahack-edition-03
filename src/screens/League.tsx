import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet,TouchableHighlight, TouchableOpacity, Modal, Alert, Image, Text, View, SafeAreaView, ViewPropTypes, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants'
import { RootStackParamList } from '../types';
import { floor } from 'react-native-reanimated';
import {FontAwesome} from '@expo/vector-icons'
import { useState } from 'react';

const perfil = require('../assets/perfil.png');
const book = require('../assets/book.png');
const sheet = require('../assets/sheet.png');
const medal = require('../assets/medal.png');
const seed = require('../assets/seed.png');

const loja = require('../assets/loja.png');


const rewardsSheet = require('../assets/rewardsSheet.png');

export default function League({ navigation }: StackScreenProps<RootStackParamList, 'League'>) {

  const [modalVisible, setModalVisible] = useState(false);

  const rewardsPoints = '';
  const rewardsTitle = 'Você tem 200 folhas';
  const rewardsDescription = 'Com elas você poderá comprar itens na loja.';

  const ranking = [
    { id: 1, position: 2, name: 'Anne de Avonlea', image: perfil, points: 1940, ranking: 1 },
    { id: 2, position: 3, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 1 },
    { id: 3, position: 4, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 1 },
    { id: 4, position: 1, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 2 },
    { id: 5, position: 2, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 2 },
    { id: 6, position: 5, name: 'Anne de Avonlea', image: perfil, points: 1940, ranking: 2 },
    { id: 7, position: 1, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 3 },
    { id: 8, position: 2, name: 'Everton Ferreira', image: perfil, points: 1940, ranking: 3 },
    { id: 9, position: 47, name: 'Anne de Avonlea', image: perfil, points: 1940, ranking: 3 },
  ];

  const perfilName = 'Anne de Avonlea';
  
  return (
    <>
    <View style={modalVisible ? { opacity:0.4, backgroundColor: '#CCC'} : {}}>
      <View style={[styles.headerContainer, ]}>
        <Text style={styles.title}>Liga de Leitores</Text>
        <TouchableOpacity onPress={() => navigation.replace('Store')}><Image source={loja} /></TouchableOpacity>
      </View>
      <View style={styles.perfilContainer}>
        <TouchableOpacity style={styles.nameContainer}>
          <Image source={perfil} />
          <Text style={styles.nameText}>Anne de Avonlea</Text>
        </TouchableOpacity>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>1932</Text>
          <Text style={styles.scoreText}>pontos</Text>
        </View>
      </View>
      <View style={styles.dashboardContainer}>
        <View style={styles.dashboard}>
          <Image source={book} />
          <View style={styles.data}>
            <Text style={styles.dataValue}>1932</Text>
            <Text style={styles.dataDescription}>Páginas</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.dashboard}
         onPress={() => {
          setModalVisible(true);
        }}>
          <Image source={sheet} />
          <View style={styles.data}>
            <Text style={styles.dataValue}>200</Text>
            <Text style={styles.dataDescription}>Folhas</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.dashboard}>
          <Image source={medal} />
          <View style={styles.data}>
            <Text style={styles.dataValue}>OURO</Text>
            <Text style={styles.dataDescription}>Nível</Text>
          </View>
        </View>
      </View>
    </View>
      <ScrollView horizontal={false} contentInsetAdjustmentBehavior="automatic" style={modalVisible ? { opacity:0.4, backgroundColor: '#CCC'} : {}} >

        <SafeAreaView >
          <View style={styles.alertContainer}>
            <View style={styles.alert}>
              <Text style={styles.alertTitle}>Entenda como a liga funciona! </Text>
              <View style={styles.alertImage}>
                <Image source={seed} />
              </View>
            </View>
          </View>
          
          <View style={styles.rankingContainer}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Ranking da Turma</Text>
              <Text style={styles.rankingOption}>Todas as posições</Text>
            </View>

          {ranking.map((item) => (

            item.ranking === 3 ?
              <View key={item.id} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }, item.name === perfilName ? { backgroundColor: '#D0F0EC' } : {}]}>
                <Text style={{ color: '#4F4F4F', fontSize: 18, fontWeight: '700' }}> {item.position}° </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={item.image} />
                  <Text style={{ color: '#4F4F4F', fontSize: 16, fontWeight: '500', marginHorizontal: 15 }}> {item.name} </Text>
                </View>
                <Text style={{ fontWeight: '700' }}> {item.points} <Text style={{ fontWeight: '300' }}>pontos</Text></Text>
              </View>
              : <></>
          ))
          }
          </View>

          <View style={styles.rankingContainer}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Ranking da Turma</Text>
              <Text style={styles.rankingOption}>Todas as posições</Text>
            </View>
          {ranking.map((item) => (

            item.ranking === 3 ?
              <View key={item.id} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }, item.name === perfilName ? { backgroundColor: '#D0F0EC' } : {}]}>
                <Text style={{ color: '#4F4F4F', fontSize: 18, fontWeight: '700' }}> {item.position}° </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={item.image} />
                  <Text style={{ color: '#4F4F4F', fontSize: 16, fontWeight: '500', marginHorizontal: 15 }}> {item.name} </Text>
                </View>
                <Text style={{ fontWeight: '700' }}> {item.points} <Text style={{ fontWeight: '300' }}>pontos</Text></Text>
              </View>
              : <></>
          ))
          }
          </View>

          <View style={styles.rankingContainer}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Ranking da Turma</Text>
              <Text style={styles.rankingOption}>Todas as posições</Text>
            </View>
          {ranking.map((item) => (

            item.ranking === 3 ?
              <View key={item.id} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }, item.name === perfilName ? { backgroundColor: '#D0F0EC' } : {}]}>
                <Text style={{ color: '#4F4F4F', fontSize: 18, fontWeight: '700' }}> {item.position}° </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={item.image} />
                  <Text style={{ color: '#4F4F4F', fontSize: 16, fontWeight: '500', marginHorizontal: 15 }}> {item.name} </Text>
                </View>
                <Text style={{ fontWeight: '700' }}> {item.points} <Text style={{ fontWeight: '300' }}>pontos</Text></Text>
              </View>
              : <></>
          ))
          }

</View>
        </SafeAreaView>
      </ScrollView>


    
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>         
          <View style={styles.modalView}>
            <TouchableOpacity style={{position: 'absolute', top:15, right:15}} onPress={() => setModalVisible(false) }>
              <FontAwesome name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Image source={rewardsSheet} />
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
  title: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    alignItems: 'center',
    color: '#333'
  },
  headerContainer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 5
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  perfilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
  nameText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 17,
    alignItems: 'center',
    color: '#333',
    marginLeft: 15
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  score: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginRight: 5
  },
  scoreText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#4F4F4F'
  },
  dashboardContainer: {

    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  dashboard: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 15
  },
  data: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  dataValue: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 19,
    paddingHorizontal: 8,
    paddingBottom: 2
  },
  dataDescription: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    paddingHorizontal: 8,
    color: '#333'
  },
  alert: {
    margin: 15,
    backgroundColor: '#ECF9DD',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15
  },
  alertContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1
  },
  alertTitle: {
    color: '#24A37B',
    fontWeight: '700',
    fontSize: 17
  },
  rankingContainer: {
    flex: 1
  },
  rankingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  rankingTitle: {
    color: '#333',
    fontWeight: '700',
    fontSize: 18
  },
  rankingOption: {
    color: '#8452EE'
  },
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