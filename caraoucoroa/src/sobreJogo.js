import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class sobreJogo extends Component {
  render() {
    return (
      <Text style={styles.txt}>esse é um jogo de sorte
       que consiste em jogar uma moeda e ver o resultado</Text>
    );
  }
}

const styles= StyleSheet.create({
  txt:{
    flex:1,
    backgroundColor:'#FF7F00'
  }
});