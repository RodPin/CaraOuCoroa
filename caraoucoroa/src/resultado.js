import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const cara= require('./imgs/cara.png');
const coroa= require('./imgs/coroa.png');



export default class resultado extends Component {
  constructor(props){
    super(props);

    this.state={resultado:''};
  }

  componentWillMount() {
    var aleatorio = Math.floor(Math.random()*2);
    let caraOuCoroa = '';

    if (aleatorio === 0) {
      caraOuCoroa = 'cara';

    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState( { resultado: caraOuCoroa } );
  }

  render() {
    if (this.state.resultado=='cara'){
      return (
        <View style={styles.resultado}>
          <Image source={cara} />
        </View>
      );
    } else {
      return (
        <View style={styles.resultado}>
          <Image source={coroa} />
        </View>
      );
    }
  }
}

const styles= StyleSheet.create({
  resultado:{
    flex:1,
    backgroundColor:'#FF7F00',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:60
  }
});