import React from 'react';
import './css/form.css';
import axios from 'axios';

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
    return (
      <div>

          <label>Title</label>
            <input
              name="title"
              type="text"
              id="inputName"
              onChange={this.changeTitle}
              value={this.state.title}
               />

           <label>Url de l'image</label>
             <input
               name="img"
               type="text"
               id="inputUrl"
               onChange={this.changeImg}
               value={this.state.img}
                />

            <label>Texte descriptif</label>
              <input
                name="description"
                type="text"
                id="inputDescription"
                onChange={this.changeDescription}
                value={this.state.description}
                 />

               <input type="button" onClick={this.sendForm} value="send"/>


      </div>
    );
  }

}

export default Create;
