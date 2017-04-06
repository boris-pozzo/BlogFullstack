const mongoose = require('mongoose');
const Article = require('../models/article');

//_GET
const getArticles = (req, res) => {
  let q = Article.find({});       //interoger la collection user
  q.exec((err, articles) =>{       //si je trouve ma collection, je l'affiche, sinon je renvoie une erreur
    if(err) res.send(err);     //si il y a une erreur renvoie moi l'erreur...
      res.send(articles);           //... sinon renvoie moi la collection
  });
};

//_POST
const postArticles = (req, res) => {
  let newArticle = new Article(req.body);
  newArticle.save((err, article) => {
    if(err){
      res.send(err);
    }
    else {
      res.json({message: 'user successfully added', article});
    }
  });
}

module.exports = {getArticles, postArticles};
