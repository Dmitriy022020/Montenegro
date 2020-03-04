import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };
  render() {
    const mark = (
      <div id='like' className="like">
        <strong>отметить</strong>
      </div>

    )
    return (
      <div className='cities info'>
        <div className="section city" id="city">

          <div className="ph kotor">
            <Link to='/citiesList/kotor'>
              <div className="size">
                <h3>Котор</h3>
              </div>
            </Link>
            {mark}
          </div>

          <div className="ph tivat">
            <Link to='/citiesList/tivat'>
              <div className="size">
                <h3>Тиват</h3>
              </div>
            </Link>
            {mark}
          </div>

          <div className="ph budva">
            <Link to='/citiesList/budva'>
              <div className="size">
                <h3>Будва</h3>
              </div>
            </Link>
            {mark}
          </div>

          <div className="ph bar">
            <Link to='/citiesList/bar'>
              <div className="size">
                <h3>Бар</h3>
              </div>
            </Link>
            {mark}
          </div>

          <div className="ph cetine">
            <Link to='/citiesList/cetine'>
              <div className="size">
                <h3>Цетинье</h3>
              </div>
            </Link>
            {mark}
          </div>

          <div className="ph podgorica">
            <Link to='/citiesList/podgorica'>
              <div className="size">
                <h3>Подгорица</h3>
              </div>
            </Link>
            {mark}
          </div>


        </div>
      </div>

    )
  };
};

export default Cities;
