import React from 'react';
import { Link } from 'react-router';
import './css/reset.css';
import './css/header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header flex">

        <div className="logo">
          logo
        </div>

        <div className="navbar">
          <ul className="menu-list flex">
            <li className="item"><Link to="/" > Home </Link></li>
            <li className="item"><Link to="HomeConnected" > HomeConnected </Link></li>
            <li className="item">Ecrire </li>
          </ul>
          <div className="connection-buttons">
            <div className="connection-button">{this.props.connectOne}</div>
            <div className="connection-button">{this.props.connectTwo}</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
