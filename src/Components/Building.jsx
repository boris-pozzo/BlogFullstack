import React from 'react';
import './css/about.css';
import Header from './Header';
import OtherContent from './OtherContent';

class About extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <OtherContent text="Page under construction" img="fa-exclamation-triangle"/>
      </div>
    );
  }

}

export default About;
