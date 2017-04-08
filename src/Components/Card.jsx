import React from 'react';
import './css/card.css';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.test=this.test.bind(this);
  }

  test(){
    window.location ='/articles/'+this.props.id+'/';
  }

  render() {
    const { title, img, description, id } = this.props
    console.log(id)
    return (
      <div className="card" >
        <div className="header-card">
          <h3>{ title }</h3>
        </div>
        <div className="img-card">
          <img src={ img } alt=""/>
        </div>
        <p>{ description }</p>
        <button onClick={this.test}>see more</button>


      </div>
    );
  }

}

export default Card;
