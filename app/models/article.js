
const mongoose = require('mongoose');

//Schemas
const Schema = mongoose.Schema;

//Schema 1
const articleSchema = new Schema(
  {
  title:       {type: String, required: true},
  img:         {type: String, required: true},
  description: {type: String, required: true},
  createAt:    {type: Date, default: Date.now}
});

articleSchema.pre('save', next =>{
  now = Date.now();
  if(!this.createAt){
    this.createAt = now;
  }
  next();
});


// Export des schemas
module.exports = mongoose.model('article', articleSchema);
