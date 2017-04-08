const mongoose = require('mongoose');
const Article = require('../models/article');

//_GET articles
const getArticles = (req, res) => {
  let q = Article.find({});       //interoger la collection user
  q.exec((err, articles) =>{       //si je trouve ma collection, je l'affiche, sinon je renvoie une erreur
    if(err) res.send(err);     //si il y a une erreur renvoie moi l'erreur...
      res.send(articles);           //... sinon renvoie moi la collection
  });
};

//_POST article
const postArticle = (req, res) => {
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

//_GET article
const getArticle = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if(err) res.send(err);
      res.json(article);
  });
}

//_PUT article
const editArticle = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if(err) res.send(err)
    Object.assign(article, req.body).save((err, article) =>{
      if(err) res.send(err)
      res.json({message :'article updated', article})
    });
  });
};

//_DELETE article
const deleteArticle = (req, res) => {
  Article.remove({_id: req.params.id}, (err, article) => {
    if(err) res.send(err)
    res.json({message: 'article deleted', article})
  });
}

module.exports = {getArticles, postArticle, getArticle, editArticle, deleteArticle};
