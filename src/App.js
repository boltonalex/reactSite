import React, { Component } from 'react';

import Navigation from './Components/Nav';
import Header from './Components/Header';
import Summary from './Components/Summary';
import Skills from './Components/Skills';
import CaseStudy from './Components/CaseStudy';
import AboutThisSite from './Components/AboutThisSite';
import Footer from './Components/Footer';

import './CSS/Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Summary />
        <Skills />
        <CaseStudy />
        <AboutThisSite />
        <Footer />
      </div>
    );
  }
}

export default App;
