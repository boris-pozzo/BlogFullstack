import React from 'react';
import Cards from './Cards';
import './css/fonts.css';
import './css/reset.css';

//Components
import Header from './Header';
import Jumbotron from './Jumbotron';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Jumbotron/>
        <Cards/>
      </div>
    );
  }
}

export default Home;
