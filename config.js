const dotenv = require('dotenv').config();
module.exports = {
  'port': process.env.PORT || 8080,
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds151820.mlab.com:51820/article`
}
