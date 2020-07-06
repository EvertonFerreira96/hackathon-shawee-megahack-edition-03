import React from 'react';
import { View, FlatList,StyleSheet,Image, SafeAreaView, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const livroArteDoRomance = require('../../assets/livro-a-arte-do-romance.png');
const livroConteAquiQueEuContoLa = require('../../assets/livro-conte-aqui-que-eu-conto-la.png');
const livroCordelinho = require('../../assets/livro-cordelinho.png');
const livroMeioAmbienteEEuComIsso = require('../../assets/livro-meio-ambiente-e-eu-com-isso.png');
const livroNinaua = require('../../assets/livro-ninaua.png');
const livroOutroProfessor = require('../../assets/livro-outro-professor.png');

const Offline = ({search}) => {
  const categories = [
    { id: '01', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, indication:1, audioBook: 1, title: 'A arte do romance', img: livroArteDoRomance },
    { id: '02', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, indication:1, audioBook: 0, title: 'Conte aqui que eu canto lá', img: livroConteAquiQueEuContoLa },
    { id: '03', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 1, indication:1, audioBook: 0, title: 'Cordelinho', img: livroCordelinho },
    { id: '04', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, indication:1, audioBook: 1, title: 'Meio Ambiente e eu com isso', img: livroMeioAmbienteEEuComIsso },
    { id: '05', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 1, indication:1, audioBook: 0, title: 'Ninaua', img: livroNinaua },
    { id: '06', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, indication:1, audioBook: 0, title: 'Outro professor', img: livroOutroProfessor },
  ];

  return (
      <FlatList
        data={categories}
        numColumns={2}
        backgroundColor='#FFF'
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(project) => project.id}
        renderItem={({item: project}) => 
        
          project.title.includes(search) ? 
          (<View style={{flexDirection:'column',margin: 3, marginBottom:25 }}> 
         
            <View style={{position:'relative',alignItems:'center', justifyContent:'center', backgroundColor: '#000'}}>
              <Image source={project.img} style={[styles.img, project.audioBook || project.offline === 1 ? {opacity: 0.6} : {opacity: 1}]} />
               {project.audioBook === 1 ? <MaterialIcons name='play-circle-outline' size={50} color="#42C2B5" style={{ position:'absolute' }} /> : <></>}
               {project.offline === 1 ? 
                    <View style={{ position: 'absolute', bottom: 15, right: 15, }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
                        <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}> Offline </Text>
                        {project.offline === 1 ? <MaterialIcons name='check-circle' size={25} color="#42C2B5" /> : <></>}
                      </View>
                    </View> : <></> }
          </View>
            <Text style={{fontStyle: 'normal', fontWeight: 'bold',fontSize: 16, lineHeight: 19, paddingVertical:5, paddingHorizontal:5}}>{ project.title.length > 20 ? `${project.title.substring(0,20)}...` : project.title}</Text>
            <Text style={{fontStyle: 'normal', fontWeight: 'normal',fontSize: 14, lineHeight: 12, paddingVertical:5, paddingHorizontal:5}}>{project.autor}</Text>
            <View style={{flexDirection:'row'}}>
            {project.starts.map((star) => ( <MaterialIcons key={Math.random()} name="star" size={24} color="#42C2B5"  /> )) }
            </View>

          </View>
          )
          :
          <>
          </>
        }
      />   
       
  );
}

export default Offline;


const styles = StyleSheet.create({
  title:{
    color: '#FFF'
  },
  img:{
    width:200, height:300, resizeMode: "cover"
  }
});