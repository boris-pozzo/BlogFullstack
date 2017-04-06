import React from 'react';
import './css/cards.css';
import axios from 'axios';

import Card from './Card';

class Cards extends React.Component {
  constructor(props) {
    super(props);
      this.state = { data: [] };
      this.loadContent = this.loadContent.bind(this);
  }

  loadContent(){
      axios.get("http://localhost:8080/write")
       .then(res => {
         this.setState({ data: res.data });
       })
       .catch(error => {
         console.log("Error with the data:", error);
       });
    }

  renderCards(){
    return this.state.data.map((el, i) => {
      return(
        <Card title={el.title} key={i} img={el.img} description={el.description}/>
      )
    })
  }

  componentDidMount () {
    this.loadContent();
  }


  render() {
    let cards = this.renderCards();
    return (
      <div className="cards">
        { cards }
      </div>
    );
  }

}

export default Cards;
