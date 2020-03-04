import React, { Component } from 'react';
//import city from './cityData.js'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  render() {
    const nav = (
      <div className='section navCity'>
        <li><a className="button" href="#h1">Основное</a></li>
        <li><a className="button" href="#h2">История</a></li>
        <li><a className="button" href="#h3">Интересное</a></li>
      </div>
    );
    return (
      <div>
        {nav}
      </div>
    );
  }
};
export default Nav
