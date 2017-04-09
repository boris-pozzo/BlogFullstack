import React from 'react';
import Header from './Header';
import axios from 'axios';
import './css/article.css';

//Components
import ArticleDeleted from './ArticleDeleted';

class Article extends React.Component {
constructor() {
  super();
  this.state = {data: [], delete:"", title: "", img:"", description:"", editArticle: false}
  this.getContent = this.getContent.bind(this);
  this.deleteArticle = this.deleteArticle.bind(this);
  this.toggleEdit = this.toggleEdit.bind(this);
  /*this.handleForm = this.handleForm.bind(this);
  this.changeTitleArticle = this.changeTitleArticle.bind(this);
  this.changeImgArticle = this.changeImgArticle.bind(this);
  this.changeDescriptionArticle = this.changeDescriptionArticle.bind(this);*/
}

  getContent(e){
    axios.get(`http://localhost:8080/articles/${this.props.params._id}/`)
    .then(res => {
      this.setState({ data: res.data})
    })
  }

  deleteArticle(){
    axios.delete(`http://localhost:8080/articles/${this.props.params._id}/`)
    .then(res => {
      this.setState({ delete:"true"})
      console.log('article deleted')
    })
  }

  /*handleForm(){
    this.setState({editArticle: !this.state.editArticle})
  }

  changeTitleArticle(e){
    this.setState({
      title: e.target.value
    })
  }

  changeImgArticle(e){
    this.setState({
      img: e.target.value
    })
  }

  changeDescriptionArticle(e){
    this.setState({
      description: e.target.value
    })
  }*/

  componentDidMount(){
    this.getContent();
    /*this.updateForm();*/
  }

  toggleEdit(){
    this.setState({ editArticle: !this.state.editArticle})
  }

  /*updateForm(){
    let data = { title: this.state.title, img: this.state.img, description: this.state.description}
    axios.put(`http://localhost:8080/articles/${this.props.params._id}/`, data)
    .catch(err => {
      console.log(err);
    })
  }*/


  render() {


  //let update = this.updateData();
  const heightWhiteBloc = {
    height: "400px"
  }

  const data = this.state.data;
    return (
      <div className="container-page-edit">
        <Header/>
        <div className="containerImg">
          <img src={data.img} alt=""/>
        </div>
        {this.state.delete ?
          <ArticleDeleted/>:
            <div>
              <div className="content-article">
                <div className="title-article">
                  <h1>{ data.title }</h1>
                </div>
                <div className="article-description">
                  <p>{ data.description }</p>
                </div>
                <div className="article-buttons">
                  <button className="button-delete" onClick={this.deleteArticle}>delete</button>
                  <button className="update" onClick={this.toggleEdit}>edit</button>
                </div>

                {this.state.editArticle ?
                  <div style={heightWhiteBloc} className="white-bloc article-edit">
                    <label>Title
                      <input
                        className="inputUrl"
                        name="title"
                        type="text"
                        id="inputName"
                        onChange={this.changeTitleArticle}
                        value={this.state.title}
                         />
                    </label>

                     <label>Url de l'image
                       <input
                         className="inputImg"
                         name="img"
                         type="text"
                         id="inputUrl"
                         onChange={this.changeImgArticle}
                         value={this.state.img}
                          />
                      </label>

                      <label>Texte descriptif
                        <textarea
                          className="textarea"
                          name="description"
                          type="text"
                          id="inputDescription"
                          onChange={this.changeDescriptionArticle}
                          value={this.state.description}
                           />
                      </label>

                         <input className="button-send" type="button" onClick={this.handleForm} value="send"/>

                      </div>
                      :null
                }

              </div>
            </div>
        }

      </div>
    );
  }

}

export default Article;
