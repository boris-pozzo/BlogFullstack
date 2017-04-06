import React from 'react';
import Cards from './Cards';


//Components
import Header from './Header';
import Jumbotron from './Jumbotron';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header connectOne="Log In" connectTwo="Sign In"/>
        <Jumbotron/>
        <Cards/>
      </div>
    );
  }

}

export default Home;
