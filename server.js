'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config.js');
const Article = require('./app/controllers/articles');

//connect to database
mongoose.connect(config.dbUrl);

app.use(express.static('build'));

//Configuratiion de l'API pour utiliser bodyParser...
//...afin de lire les fichiers JSON et la "request body"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//routes
app.route('/write')
  .get(Article.getArticles)
  .post(Article.postArticles)


/*const writeRoute = express.Router();
writeRoute.get('/', Article.getArticles)

app.use('/write', writeRoute)*/


app.listen(config.port, () => {
  console.log("The frontend server is running on port " + config.port);
});
