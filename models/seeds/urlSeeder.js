// import mongoose for mongodb connection
const db = require('../../config/mongoose')
// import schema model
const Url = require('../url')

db.once('open' , ()=>{
  
  for (let i = 0; i < 10; i++) {
    Url.create({ 
      inputUrl: `url-${i}`,
      shortenUrl:`urlShortened-${i}`
    })
  }

})