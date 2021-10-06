// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// import url model
const Url = require('../../models/url')
// import random function 
const random = require('../../public/javascripts/random')

// css variant for main.hbs to load from public/stylesheets/css
const index = 'index'
const result = 'result'
// render index page
router.get('/', (req, res) => {
  res.render('index', { stylesheet: index })
})
// post new input from client
router.post('/', (req, res) => {
  const body = req.body
  const shortenedUrl = random()
  // find and check if input already added to db
  Url.findOne({ inputUrl: body.url_name })
     .lean()
     .then(url => {
      if (url) {
        res.render('result', { inputUrl: url.inputUrl, shortenedUrl: url.shortenedUrl, stylesheet: result })
      } else {
        Url.create({ inputUrl: body.url_name, shortenedUrl: shortenedUrl })
          .then(() => res.redirect('/result?inputUrl=' + body.url_name))
      }
    })
})

module.exports = router