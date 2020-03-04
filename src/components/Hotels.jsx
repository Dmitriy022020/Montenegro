import React, { Component } from 'react';

class Hotels extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };
  render() {
    return (
        <div className="container-trans">
          <div className="flipper" id="open">
            <div className="front">
              <h5>Porto Montenegro</h5>
              <a href="#open" className="open button-trans">подробно</a>
            </div>
            <div className="back">
              <div className="inner">
                <h4>Порт Черногории</h4>
                <p>Porto Montenegro представляет собой яхтенный комплекс, который расположен в Которском заливе, являющемся объектом Всемирного наследия ЮНЕСКО. В его состав входит марина с инфраструктурой мирового класса и поселок яхтсменов с роскошными апартаментами, которые доступны для продажи и аренды.</p>
              </div>
              <a href="#close" className="close button-trans">вернуться</a>
            </div>
          </div>
        </div>
    )
  };
};

export default Hotels;
