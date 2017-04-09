import React from 'react';
import Cards from './Cards';
import './css/fonts.css';
import './css/reset.css';

//Components
import Header from './Header';
import Jumbotron from './Jumbotron';

class Home extends React.Component {

  render() {

    const styleH3= {
      backgroundColor: "#F5F5F5",
      padding: "70px 0px 30px 0px",
      display: "flex",
      justifyContent: "center",
      fontSize: "30px"
    }
    return (
      <div>
        <Header />
        <Jumbotron/>
        <h1 style={styleH3}>Javascript News</h1>
        <Cards/>
      </div>
    );
  }
}

export default Home;
