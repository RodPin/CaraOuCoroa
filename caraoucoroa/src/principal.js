import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const logo= require('./imgs/caracoroa.png')
const btnJogar= require('./imgs/jogar.png')
const btnSobre= require('./imgs/sobre.png')
const btnOutros= require('./imgs/outrosjogos.png')

export default class principal extends Component {
  render() {
    return (
      <View style={styles.tudo}>
        <View style={styles.alinhaImgJogar}>
          <Image source={logo}/>
          <TouchableHighlight
            onPress={() => {Actions.d();}}    
          >
            <Image source={btnJogar}/>
          </TouchableHighlight>
        </View>
        <View style={styles.alinhaSobreOutros}>
          <TouchableHighlight
            onPress={() => {Actions.b();}}
          >
            <Image source={btnSobre} style={styles.tamanhoImg}/>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {Actions.c();}}    
          >
            <Image source={btnOutros} style={styles.tamanhoImg}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  tudo:{
    backgroundColor:'#FF7F00',
    flex:1
  },
  alinhaImgJogar:{
    flex:9,
    justifyContent:'center',
    alignItems:'center'
  },
  alinhaSobreOutros:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tamanhoImg:{height:50,width:150}
});