import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="header">
        <div className='section'>
        <div className="article">
          <h1>Всё о Черногории</h1>
        </div>
        <ul className="nav">
          <li><Link className='button' to='/'>Главная</Link></li>
          <div className="dropdown">
            <li><Link className='button' to='/citiesList'>Города</Link></li>
            <div className="dropdown-content">
              <li><Link className='button' to='/citiesList/kotor'>Котор</Link></li>
              <li><Link className='button' to='/citiesList/tivat'>Тиват</Link></li>
              <li><Link className='button' to='/citiesList/budva'>Будва</Link></li>
              <li><Link className='button' to='/citiesList/bar'>Бар</Link></li>
              <li><Link className='button' to='/citiesList/cetine'>Цетинье</Link></li>
              <li><Link className='button' to='/citiesList/podgorica'>Подгорица</Link></li>
            </div>
          </div>
          <li><Link className='button' to='/hotels'>Отели</Link></li>
          <li><Link className='button' to='/photos'>Фото</Link></li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Header;
