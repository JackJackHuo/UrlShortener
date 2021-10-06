// import mongoose for mongodb connection
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// setting model schema 
const urlSchema = new Schema({
  inputUrl:{
    type:String,
    required: true
  },
  shortenedUrl:{
    type:String
  }
})
// export model 
module.exports = mongoose.model('Url', urlSchema)