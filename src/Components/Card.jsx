import React from 'react';
import './css/card.css';

class Card extends React.Component {

  render() {
    const { title, img, description } = this.props
    return (
      <div className="card">
        <div className="header-card">
          <h3>{title}</h3>
        </div>
        <div className="img-card">
          <img src={ img } alt=""/>
        </div>
        <p>{ description }</p>

      </div>
    );
  }

}

export default Card;
