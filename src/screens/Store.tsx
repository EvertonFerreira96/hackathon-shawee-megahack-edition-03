import * as React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Modal, Alert, Image, Text, View, SafeAreaView, ViewPropTypes, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants'
import { RootStackParamList } from '../types';
import { floor } from 'react-native-reanimated';
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { useState } from 'react';

const perfil = require('../assets/perfil.png');
const book = require('../assets/book.png');
const sheet = require('../assets/sheet.png');
const medal = require('../assets/medal.png');
const seed = require('../assets/seed.png');
const loja = require('../assets/loja.png');


const productDuck = require('../assets/duck.png');
const productShirt = require('../assets/shirt.png');
const productHelmet = require('../assets/helmet.png');
const productScarf = require('../assets/scarf.png');
const productLego = require('../assets/productLego.png');
const productFone = require('../assets/productFone.png');
const productBag = require('../assets/productBag.png');
const productIngresso = require('../assets/productIngresso.png');

const monkeyWithScarf = require('../assets/monkeyWithScarf.png');
const rewardsSheet = require('../assets/rewardsSheet.png');

export default function Store({ navigation }: StackScreenProps<RootStackParamList, 'Store'>) {

  const [modalVisible, setModalVisible] = useState(false);

  const rewardsPoints = '';
  const rewardsTitle = 'Excelente compra!';
  const rewardsDescription = 'Agora estamos prontos para a próxima viagem.';
  const btnComprar = false;

  const products = [
    {buy:false, loja:1, id: 1, name: 'Patinho', image: productDuck, value: 220, },
    {buy:false, loja:1, id: 2, name: 'Camiseta', image: productShirt, value: 250, },
    {buy:false, loja:1, id: 3, name: 'Capacete', image: productHelmet, value: 230, },
    {buy:true, loja:1, id: 4, name: 'Cachecol', image: productScarf, value: 30, },
    {buy:false, loja:2, id: 5, name: 'Lego', image: productLego, value: 300, },
    {buy:false, loja:2, id: 6, name: 'Fone Bluetooth', image: productFone, value: 1000, },
    {buy:false, loja:2, id: 7, name: 'Mochila', image: productBag, value: 320, },
    {buy:false, loja:2, id: 8, name: 'Ingresso', image: productIngresso, value: 300, },

  ];

  const perfilName = 'Anne de Avonlea';
  const [perfilSheet, setPerfilSheet] = useState(200); 
  const [buy, setBuy] = useState(true); 

  return (
    <>
      <View style={modalVisible ? { opacity: 0.4, backgroundColor: '#CCC' } : {}}>
        <View style={[styles.headerContainer,]}>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Root')}><AntDesign name="back" size={24} color="black" /></TouchableOpacity>
            <Text style={styles.title}>Lojinha da Árvore</Text>
          </View>
        </View>
        <View style={styles.perfilContainer}>
          <TouchableOpacity style={styles.nameContainer}>
            <Image source={perfil} />
            <Text style={styles.nameText}>Anne de Avonlea</Text>
          </TouchableOpacity>
          <View style={styles.scoreContainer}>
            <Image source={sheet} />
  <Text style={styles.score}>{perfilSheet}</Text>
            <Text style={styles.scoreText}>folhas</Text>
          </View>
        </View>
      </View>

    <ScrollView>
      

    <Text style={[styles.score, {paddingVertical:5, paddingHorizontal:10}, modalVisible ? { opacity: 0.4, backgroundColor: '#CCC' } : {}]}>Lojinha dos Macaco</Text>

      <View style={[{flex:1,flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}, modalVisible ? { opacity: 0.4, backgroundColor: '#CCC' } : {}]}> 

          { products.map(product => (
            product.loja === 1 ?
              <View key={product.id}  style={{ }}>
                <View style={{ margin: 10, borderColor: '#E5E5E5', borderWidth: 1 }}>
                  <View style={{ paddingHorizontal: 25, paddingVertical: 5 }}>
                    <Image source={product.image} resizeMode='contain' />
                    <Text style={{ textAlign: 'center', padding: 5, fontWeight: '700' }}>{product.name}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
                      <Image source={sheet} />
                      <Text style={{ fontSize: 12, marginLeft: 5 }}>{product.value} folhas</Text>
                    </View>
                  </View>
                { product.id !== 4 ?  <TouchableOpacity  disabled={!product.buy} onPress={() => setModalVisible(true)} style={ product.buy ? { backgroundColor: '#42C2B5', } : { backgroundColor: '#E5E5E5', }  }><Text style={{ color: '#FFF', padding: 8, textAlign: 'center' }}>Comprar</Text></TouchableOpacity>
                  : product.id === 4 && !buy ?  <Text style={{  padding: 8, textAlign: 'center',color: '#8452EE' }} >Em uso</Text> : <TouchableOpacity  disabled={!product.buy} onPress={() => setModalVisible(true)} style={ product.buy ? { backgroundColor: '#42C2B5', } : { backgroundColor: '#E5E5E5', }  }><Text style={{ color: '#FFF', padding: 8, textAlign: 'center' }}>Comprar</Text></TouchableOpacity>}
                </View>
              </View>
            :
            <></>
           ))
          }

      </View>
      <Text style={[styles.score, {paddingVertical:5, paddingHorizontal:10}, modalVisible ? { opacity: 0.4, backgroundColor: '#CCC' } : {}]}>Lojinha dos Parceiros</Text>
      <View style={[{flex:1,flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}, modalVisible ? { opacity: 0.4, backgroundColor: '#CCC' } : {}]}> 

          
      { products.map(product => (
            product.loja === 2 ?
              <View key={product.id} style={{ }}>
                <View style={{ margin: 10, borderColor: '#E5E5E5', borderWidth: 1 }}>
                  <View style={{ paddingHorizontal: 25, paddingVertical: 5 }}>
                    <Image source={product.image} resizeMode='contain' />
                    <Text style={{ textAlign: 'center', padding: 5, fontWeight: '700' }}>{product.name}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
                      <Image source={sheet} />
                      <Text style={{ fontSize: 12, marginLeft: 5 }}>{product.value} folhas</Text>
                    </View>
                  </View>
                { true ? <TouchableOpacity  disabled={!product.buy} onPress={() => setModalVisible(true)} style={ product.buy ? { backgroundColor: '#42C2B5', } : { backgroundColor: '#E5E5E5', }  }><Text style={{ color: '#FFF', padding: 8, textAlign: 'center' }}>Comprar</Text></TouchableOpacity>
                  : <Text style={{color: '#8452EE'}}>Em uso</Text>}
                </View>
              </View>
            :
            <></>
           ))
          }

      </View>

</ScrollView>

<View style={styles.centeredView}>
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <TouchableOpacity style={{ position: 'absolute', top: 15, right: 15 }} onPress={() => {
          setBuy(false)
          setPerfilSheet(perfilSheet - 30);
          setModalVisible(false)}}>
          <FontAwesome name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Image source={monkeyWithScarf} />
        <Text style={{ color: '#8452EE', padding: 5, fontSize: 32 }}>{rewardsPoints}</Text>
        <Text style={{ color: '#333', padding: 5, fontSize: 22, fontWeight: '700' }}>{rewardsTitle}</Text>
        <Text style={{ textAlign: 'center', padding: 5, fontSize: 16 }}>{rewardsDescription}</Text>
        {btnComprar ? 
        <View style={{ backgroundColor: '#8452EE', paddingHorizontal: 100, paddingVertical: 10, marginTop: 50 }}>
          <TouchableOpacity onPress={() => navigation.replace('Store')} ><Text style={{ color: '#FFF', fontWeight: '700' }}>Ir para loja</Text></TouchableOpacity>
        </View>
        :<></>}
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
    color: '#333',
    marginLeft: 15
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
    alignItems: 'center',
  },
  score: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginHorizontal: 3
    
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30
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