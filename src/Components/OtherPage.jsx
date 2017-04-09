import React from 'react';
import './css/about.css';

class About extends React.Component {

  render() {

    const heightWhiteBloc = {
      height:"70%"
    }

    return (
      <div className="container-form">

      <div style={heightWhiteBloc} className="white-bloc">
          <div className="headerImg">
            <img src="" alt=""/>
          </div>
          <ul>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Github</li>
          </ul>

        </div>

      </div>
    );
  }

}

export default About;
