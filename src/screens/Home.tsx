import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Image,SafeAreaView, ScrollView, Keyboard } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TabBar, TabView, SceneMap, SceneRendererProps } from 'react-native-tab-view';
import { TextInput } from 'react-native-gesture-handler';
import { useState,useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons'

import { RootStackParamList } from '../types';

import Explore from '../views/Explore/index.js';
import Favorites from '../views/Favorites';
import Offline from '../views/Offline';
import EBook from '../views/eBooks';
import Indications from '../views/Indications';




export default function TabOneScreen({ navigation }: StackScreenProps<RootStackParamList, 'TabOneScreen'>) {

  const [search, setSearch] = useState('');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first',  title: 'EXPLORAR' },
    { key: 'second', title: 'OFFLINE' },
    { key: 'fourth', title: 'INDICAÇÕES' },
    { key: 'third',  title: 'FAVORITOS' },
    { key: 'fifth',  title: 'MINHA BIBLIOTECA' },
  ]);

  const renderScene = SceneMap({
    first: () => <Explore search={search} />,
    second: () => <Offline search={search} />,
    third: () => <Favorites search={search} />,
    fourth: () => <Indications search={search} />,
    fifth: () => <EBook search={search} />,

  });

  const renderTabBarView = (props: any) => (
  <ScrollView
    horizontal={true}
    style={{ flex:1, maxHeight: 60 }}
    showsHorizontalScrollIndicator={false}
    ref={(ref) => {
      ref?.scrollTo({ x:105 * index, y:0, animated:true }) }}
  >
  <TabBar 
    {...props}
    style={{ backgroundColor: '#42C2B5' }}
    indicatorStyle={[{ backgroundColor: '#FFF' }]}
    activeColor='#FFF'
    inactiveColor='#278A85'
    tabStyle={{width:150, overflow: 'visible'}}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color, fontSize: 17,marginRight:0, fontWeight: '700' }}>
        {route.title}
      </Text>)}
  />
  </ScrollView>);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#FFF', margin:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center'  }}>
        <TextInput 
          placeholder='Pesquise pelo Titulo, Autor, Categoria do livro' 
          maxLength={35} 
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={{ backgroundColor: '#FFF',borderRadius:5,padding:15}}
        />
        <AntDesign name="search1" size={24}  color="#B2B2B2" style={{marginRight:15}} onPress={Keyboard.dismiss} />
      </View>
      <TabView
        renderTabBar={(props) => (renderTabBarView(props))}
        navigationState={{ index, routes }}
        renderScene={(props) => (renderScene(props))}
        onIndexChange={setIndex}
        style={styles.view}       
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  view:{
    flex:1,
  },
   title:{
  },
  header:{
    backgroundColor: '#42C2B5',
  },
  container: {
    flex: 1,
    backgroundColor: '#42C2B5',    
  },});
