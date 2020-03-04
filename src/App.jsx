import React from 'react';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './reset.css';
import './App.css';
import './styles.css';
import './cities.css';
import './trans.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }
  scrollClick = () => {
    window.scrollTo(0, 0)
  };
  hiddenTop = () => {
    if (window.pageYOffset < 300) {
      this.setState({
        isOpen: false
      })
    }
    console.log(window.pageYOffset)
  };
  
  render() {
    const { isOpen } = this.state;
    const top = isOpen &&
      <div className="top" onClick={this.scrollClick} onScroll={this.hiddenTop}>
        вверх
      </div>
    return (
      <div className="app">
        <Header />
        <Main />
        {top}
        <Footer />
      </div>
    );
  }
}

export default App;


