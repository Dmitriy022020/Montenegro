import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: ''
    }
  };
  mailChange = (event) => {
    this.setState({mail: event.target.value})
  }
  email = () => {
    alert(`Письмо отправлено на ${this.state.mail}`)
  }
  render() {

    return (
      <div className="footer">
        <div className='section'>
          <div className="copyright">
            <h4>Информация для партнеров:</h4>
            <p>Сайт разработал Багаев Дмитрий</p>
            <p>Studio Code 2020</p>
          </div>
          <div className="signup">
            <form className="container">
              <label>Подписаться на обновления</label>
              <input type="email" placeholder="osteraft@mail.ru" onChange={this.mailChange} value={this.state.mail}/>
              <input className="button-primary" type="submit" onClick={this.email} value="ОТПРАВИТЬ" />
            </form>
          </div>
        </div>
      </div>
    )
  };
};

export default Footer;
