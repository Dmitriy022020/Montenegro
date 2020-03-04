import React from 'react';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './reset.css';
import './App.css';
import './styles.css';
import './cities.css';
import './trans.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


//<div id="arrowTop" hidden>вверх</div>
