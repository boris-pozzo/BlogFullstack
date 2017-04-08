import React from 'react';
import { Link } from 'react-router';

//styles
import './css/reset.css';
import './css/header.css';
import './css/header-mobile.css';
import './css/fonts.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      width:"",
      height:"100px",
      boxShadow: "100px",
      showComponent: false,
      margin:"0px"
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

handleScroll(event) {
  let scrollTop = event.target.body.scrollTop;
  if(scrollTop > 0) {
    this.setState({ width: "50px", height:"50px", boxShadow:""})
  }
  else if (scrollTop ===0) {
    this.setState({ width: "100px", height:"100px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"})
  }
}

onMouseLeave(e){
  e.target.style.color= "#717171";
}

onMouseEnter(e){
  e.target.style.color= "black";
}

toggleMenu(){
  this.setState({ showComponent : !this.state.showComponent})
  if(this.state.showComponent){
    this.setState({margin: "0px"})
  }
  else {
    this.setState({margin: "125px"})
  }
}


  render() {
    const shadow = {
      boxShadow: this.state.boxShadow
    }

    const textDecoration = {
      textDecoration: "none",
      color: "#717171",
      cursor: "pointer"
    }

    const marginTop ={
      marginTop: this.state.margin
    }

    return (
      <div className="container">

        {this.state.showComponent ?
          <ul className="menu-list-mobile">
            <li className="item"><Link style={textDecoration} to="/" > Home </Link></li>
            <li className="item"><Link style={textDecoration} to="create" > New article </Link></li>
            <li className="item"><Link style={textDecoration} to="about" > About </Link></li>
          </ul>:
           null
        }

        <div className="header flex" style={marginTop}>

          <div className="logo-container">
            <div className="logo">
              <img width={this.state.width} height={this.state.height} style={shadow} src="http://is1.mzstatic.com/image/thumb/Purple19/v4/82/c5/1e/82c51e52-983d-33d6-78df-480274907dc8/source/1200x630bb.jpg" alt="logo"/>
            </div>
          </div>

          <ul className="menu-list flex">
            <li className="item"><Link style={textDecoration} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} to="/" >Home</Link></li>
            <li className="item"><Link style={textDecoration} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} to="create" > New article </Link></li>
            <li className="item"><Link style={textDecoration} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} to="about" > About </Link></li>
          </ul>

          <div className="connection-buttons">
            <div style={textDecoration} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >{this.props.connectOne}</div>
            <div>|</div>
            <div style={textDecoration} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >{this.props.connectTwo}</div>
          </div>

          <div onClick={this.toggleMenu}>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </div>

        </div>
      </div>
    );
  }

}

export default Header;
