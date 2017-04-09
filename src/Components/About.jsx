import React from 'react';
import './css/about.css';
import Header from './Header';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseLeave(e){
    e.target.style.color= "#717171";
  }

  onMouseEnter(e){
    e.target.style.color= "black";
  }

  render() {

    const heightWhiteBloc = {
      height:"70%"
    }

    const textDecoration = {
      textDecoration: "none",
      color: "#717171",
      cursor: "pointer"
    }

    return (
      <div>
        <Header/>
        <div className="container-form">

        <div style={heightWhiteBloc} className="white-bloc about-bloc">
            <div className="headerImg">
              <img src="http://simplonline.co/uploads/images/Front_End/tony.tiratay/logo-simplon.png" alt=""/>
            </div>
            <div className="author">
              Made by Boris.P (Promo#6)
            </div>
            <ul className="list-social">
              <li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} ><i className="fa fa-linkedin" aria-hidden="true"></i> <a style={textDecoration} href="https://www.linkedin.com/in/borispozzo/">  Linkedin</a></li>
              <li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} ><i className="fa fa-twitter" aria-hidden="true"></i><a style={textDecoration} href="https://twitter.com/BorisPOZZO">  Twitter</a></li>
              <li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} ><i className="fa fa-github" aria-hidden="true"></i> <a style={textDecoration} href="https://github.com/boris-pozzo">  Github</a></li>
            </ul>

          </div>

        </div>

      </div>
    );
  }

}

export default About;
