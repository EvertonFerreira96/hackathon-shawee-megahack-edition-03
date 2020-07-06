import React, { useState, useEffect } from 'react';
import { TouchableOpacity,View, StyleSheet, FlatList, Image, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { categories, colections } from '../../constants/Library.ts';

const Explore = ({ search }) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container}
        horizontal={false}>
        <Text style={styles.title}>Destaques</Text>

        <FlatList
          backgroundColor='#FFF'
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id.toString()}
          renderItem={({ item: project }) =>
            project.title.includes(search) ?
              (
                <TouchableOpacity style={{ flexDirection: 'column', margin: 3, position: 'relative' }} onPress={() => navigation.navigate('Book', {project})}>
                  <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    <Image source={project.img} style={[{ width: 200, height: 300, resizeMode: "cover" }, project.audioBook || project.offline === 1 ? { opacity: 0.6 } : { opacity: 1 }]} />
                    {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position: 'absolute' }} /> : <></>}
                    {project.offline === 1 ? 
                    <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                        <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                        {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                      </View>
                    </View> : <></> }
                  </View>


                  <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 16, lineHeight: 19, paddingVertical: 5, paddingHorizontal: 5 }}>{project.title.length > 20 ? `${project.title.substring(0, 20)}...` : project.title}</Text>
                  <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 12, paddingVertical: 5, paddingHorizontal: 5 }}>{project.autor}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {project.starts.map((star) => (<MaterialIcons key={Math.random()} name="star" size={24} color="#42C2B5" />))}
                  </View>
                </TouchableOpacity>
              )
              :
              <>
              </>
          }
        />

        <Text style={styles.title}>Continuar Lendo</Text>
        <FlatList
          backgroundColor='#FFF'
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) =>
            project.title.includes(search) ?
              (
                <View style={{ flexDirection: 'column', margin: 3 }}>
                  <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    <Image source={project.img} style={[{ width: 170, height: 235, resizeMode: "cover" }, project.audioBook || project.offline === 1 ? { opacity: 0.6 } : { opacity: 1 }]} />
                    {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position: 'absolute' }} /> : <></>}
                    {project.offline === 1 ? 
                    <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                        <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                        {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                      </View>
                    </View> : <></> }
                  </View>
                  <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 19, paddingVertical: 5, paddingHorizontal: 5 }}>{project.title.length > 20 ? `${project.title.substring(0, 20)}...` : project.title}</Text>
                  <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 12, paddingVertical: 5, paddingHorizontal: 5 }}>{project.autor}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {project.starts.map((star) => (<MaterialIcons key={Math.random()} name="star" size={24} color="#42C2B5" />))}
                  </View>
                </View>
              )
              :
              <>
              </>
          }
        />

        <Text style={[styles.title, { marginBottom: 15 }]}>Coleções Árvore</Text>
        <FlatList
          style={[styles.list, { maxHeight: 200 }]}
          backgroundColor='#FFF'
          data={colections}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', borderStyle: 'solid', borderWidth: 1, borderColor: '#CCC', marginRight: 15 }}>
                <Image source={project.img} style={{ justifyContent: 'flex-start' }} resizeMode='center' width={250} height={130} />
                <Text style={{ color: '#000', fontSize: 18, padding: 20, fontWeight: '700', maxWidth: 200, textAlign: 'center' }}>{project.title}</Text>
              </View>
            </>
          )
          }
        />
        <Text style={styles.title}>Trilha de Leituras Árvore</Text>
        <FlatList
          backgroundColor='#FFF'
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) =>
            project.title.includes(search) ?
              (
                <View style={{ flexDirection: 'column', margin: 3, marginBottom: 25 }}>
                  <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    <Image source={project.img} style={[{ width: 170, height: 235, resizeMode: "cover" }, project.audioBook || project.offline === 1 ? { opacity: 0.6 } : { opacity: 1 }]} />
                    {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position: 'absolute' }} /> : <></>}
                    {project.offline === 1 ? 
                    <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                        <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                        {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                      </View>
                    </View> : <></> }
                  </View>
                  <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 19, paddingVertical: 5, paddingHorizontal: 5 }}>{project.title.length > 12 ? `${project.title.substring(0, 20)}...` : project.title}</Text>
                  <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 12, paddingVertical: 5, paddingHorizontal: 5 }}>{project.autor}</Text>
                  <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 0 }}>
                    {project.starts.map((star) => (<MaterialIcons key={Math.random()} name="star" size={20} color="#42C2B5" />))}
                  </View>
                </View>
              )
              :
              <>
              </>}
        />

        <Text style={styles.title}>Projetos de Leitura</Text>
        <FlatList
          backgroundColor='#FFF'
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) =>

            project.title.includes(search) ? (
              <View style={{ flexDirection: 'column', margin: 3 }}>
                <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                  <Image source={project.img} style={[{ width: 170, height: 235, resizeMode: "cover" }, project.audioBook || project.offline === 1 ? { opacity: 0.6 } : { opacity: 1 }]} />
                  {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position: 'absolute' }} /> : <></>}
                  {project.offline === 1 ? 
                  <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                      <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                      {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                    </View>
                  </View> : <></> }
                </View>
                <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 19, paddingVertical: 5, paddingHorizontal: 5 }}>{project.title.length > 12 ? `${project.title.substring(0, 20)}...` : project.title}</Text>
                <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 12, paddingVertical: 5, paddingHorizontal: 5 }}>{project.autor}</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 0 }}>
                  {project.starts.map((star) => (<MaterialIcons key={Math.random()} name="star" size={20} color="#42C2B5" />))}
                </View>
              </View>
            )
              :
              <>
              </>
          }
        />

        <Text style={styles.title}>Projetos de Leitura</Text>
        <FlatList
          backgroundColor='#FFF'
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) =>

            project.title.includes(search) ? (
              <View style={{ flexDirection: 'column', margin: 3 }}>
                <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                  <Image source={project.img} style={[{ width: 170, height: 235, resizeMode: "cover" }, project.audioBook || project.offline === 1 ? { opacity: 0.6 } : { opacity: 1 }]} />
                  {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position: 'absolute' }} /> : <></>}
                  {project.offline === 1 ? 
                  <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                      <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                      {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                    </View>
                  </View> : <></> }
                </View>
                <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 19, paddingVertical: 5, paddingHorizontal: 5 }}>{project.title.length > 12 ? `${project.title.substring(0, 20)}...` : project.title}</Text>
                <Text style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 12, paddingVertical: 5, paddingHorizontal: 5 }}>{project.autor}</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 0 }}>
                  {project.starts.map((star) => (<MaterialIcons key={Math.random()} name="star" size={20} color="#42C2B5" />))}
                </View>
              </View>
            )
              :
              <>
              </>
          }
        />
      </ScrollView>
    </>
  );
}

export default Explore;


const styles = StyleSheet.create({
  list: {
    maxHeight: 260,
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontWeight: '500',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 0,
    backgroundColor: '#FFF'
  },
  books: {
    marginHorizontal: 3,
    padding: 0,

  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },

});
