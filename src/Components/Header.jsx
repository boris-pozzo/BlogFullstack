import React from 'react';
import { Link } from 'react-router';

//styles
import './css/reset.css';
import './css/header.css';
import './css/header-mobile.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      width:"",
      height:"100px",
      boxShadow: "100px",
      showComponent: false

    }
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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

toggleMenu(){
  this.setState({ showComponent : !this.state.showComponent})
}


  render() {
    const shadow = {
      boxShadow: this.state.boxShadow
    }
    return (
      <div className="container">

        {this.state.showComponent ?
          <ul className="menu-list-mobile">
            <li className="item"><Link to="/" > Home </Link></li>
            <li className="item"><Link to="HomeConnected" > HomeConnected </Link></li>
            <li className="item">Ecrire </li>
          </ul>:
           null
        }

        <div className="header flex">

          <div className="logo-container">
            <div className="logo">
              <img width={this.state.width} height={this.state.height} style={shadow} src="http://is1.mzstatic.com/image/thumb/Purple19/v4/82/c5/1e/82c51e52-983d-33d6-78df-480274907dc8/source/1200x630bb.jpg" alt="logo"/>
            </div>
          </div>

          <ul className="menu-list flex">
            <li className="item"><Link to="/" > Home </Link></li>
            <li className="item"><Link to="HomeConnected" > HomeConnected </Link></li>
            <li className="item">Ecrire </li>
          </ul>

          <div className="connection-buttons">
            <div>{this.props.connectOne}</div>
            <div>|</div>
            <div>{this.props.connectTwo}</div>
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
