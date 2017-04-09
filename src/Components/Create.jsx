import React from 'react';
import './css/form.css';
import axios from 'axios';

//Component
import Header from './Header';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      description:"",
      img:""
    }
    this.sendForm=this.sendForm.bind(this);
    this.changeTitle= this.changeTitle.bind(this);
    this.changeDescription= this.changeDescription.bind(this);
    this.changeImg= this.changeImg.bind(this);
  }

  changeTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  changeDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  changeImg(e){
    this.setState({
      img: e.target.value
    })
  }

  sendForm(){
    axios.post('http://localhost:8080/articles', { title: this.state.title, img: this.state.img, description: this.state.description})
      .then(data => {
        console.log("saved successfully");
      })
      .catch(err => {
        console.log("error" + err);
      })
  }


  render() {
    const heightWhiteBloc = {
      height:"70%"
    }

    return (
      <div>
        <Header/>
      <div className="container-form">

        <div style={heightWhiteBloc} className="white-bloc">
          <label>Title
            <input
              className="inputUrl"
              name="title"
              type="text"
              id="inputName"
              onChange={this.changeTitle}
              value={this.state.title}
               />
          </label>

           <label>Url de l'image
             <input
               className="inputImg"
               name="img"
               type="text"
               id="inputUrl"
               onChange={this.changeImg}
               value={this.state.img}
                />
            </label>

            <label>Texte descriptif
              <textarea
                className="textarea"
                name="description"
                type="text"
                id="inputDescription"
                onChange={this.changeDescription}
                value={this.state.description}
                 />
            </label>

               <input className="button-send" type="button" onClick={this.sendForm} value="send"/>

            </div>

      </div>
      </div>
    );
  }

}

export default Create;
