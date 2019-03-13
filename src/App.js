import React, { Component } from 'react';
import Header from './layout/Header';
import SubHeader from './layout/SubHeader';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <SubHeader/>
      </>
    );
  }
}

export default App;
