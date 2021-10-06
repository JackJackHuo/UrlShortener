// import express
const express = require('express')
// import express-handlebars
const exphbs = require('express-handlebars')
// import routes
const router = require('./routes/index')
// import mongoose
require('./config/mongoose')
// create express server
const app = express()
// setting port
const port = 3000

// setting template engine
app.engine('hbs' , exphbs({defaultLayout:'main' , extname:'hbs'}))
app.set('view engine' , 'hbs')
// static files
app.use(express.static('./public'))
// use express built-in body parser for post request
app.use(express.urlencoded({extended:true}))
// setting route
app.use(router)

// setting port to which server listens
app.listen( port , () => {
  console.log(`youre listening to http://localhost:${port}`)
})