import React from 'react';
import Header from './Header.js';
import Mainnavbar from './Mainnavbar';
import Container from './Container.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <div id="global">
        <Header></Header>
        <Mainnavbar></Mainnavbar>
        <Container></Container>
        <Footer></Footer>
      </div>
    )
  }
}