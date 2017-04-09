import React from 'react';
import './css/othercontent.css';

class OtherContent extends React.Component {

  render() {
    const heightWhiteBloc = {
      height:"70%"
    }

    const size = {
      fontSize: "20px"
    }

    return (
      <div className="container-form">

      <div style={heightWhiteBloc} className="white-bloc">
          <div className="headerImg flex-text">
            <i className={`fa fa-5x ${this.props.img}`} aria-hidden="true"></i>
          </div>
          <div className="flex-text">
            <h3 style={size} >{this.props.text}</h3>
          </div>

        </div>

      </div>
    );
  }

}

export default OtherContent;
