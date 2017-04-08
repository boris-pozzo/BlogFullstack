import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import axios from 'axios';
import './css/article.css';

//Components
import Test from './Test';

class Article extends React.Component {
constructor() {
  super();
  this.state = {data: [], delete:""}
  this.getContent = this.getContent.bind(this);
  this.deleteArticle = this.deleteArticle.bind(this);
}

  getContent(e){
    axios.get(`http://localhost:8080/articles/${this.props.params._id}/`)
    .then(res => {
      this.setState({ data: res.data})
    })
  }

  deleteArticle(){
    axios.delete('http://localhost:8080/articles/'+this.props.params._id+'/')
    .then(res => {
      this.setState({ delete:"true"})
      console.log('article deleted')
    })
  }

  componentDidMount(){
    this.getContent();
  }


  render() {

  //let update = this.updateData();

  const data = this.state.data;
    return (
      <div>

        {this.state.delete ?
          <Test/>:
            <div>
              <Header connectOne="Log In" connectTwo="Sign In"/>
              <Jumbotron/>
              <h1>{ data.title }</h1>
              <p>{ data.description }</p>
              <button className="button-delete" onClick={this.deleteArticle}>delete</button>
            </div>
        }

      </div>
    );
  }

}

export default Article;
