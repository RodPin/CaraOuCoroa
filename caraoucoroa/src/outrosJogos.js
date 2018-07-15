import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class outrosJogos extends Component {
  render() {
    return (
      <Text style={styles.txt}>Tambem fiz um jogo de par ou impar e 
      </Text>
    );
  }
}

const styles= StyleSheet.create({
  txt:{
    flex:1,
    backgroundColor:'#FF7F00'
  }
});