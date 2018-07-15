import React, { Component } from 'react';
import { Router,Scene } from 'react-native-router-flux';

import Principal from './src/principal';
import SobreJogo from './src/sobreJogo';
import OutrosJogos from './src/outrosJogos';
import Resultado from './src/resultado'

export default class app6 extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='app'>
          <Scene key='a' component={Principal}  />
          <Scene key='b' component={SobreJogo} title='Sobre o Jogo' />
          <Scene key='c' component={OutrosJogos} title='Outros Jogos'  />
          <Scene key='d' component={Resultado} title='Resultado'  />
        </Scene>
      </Router>
    );
  }
}