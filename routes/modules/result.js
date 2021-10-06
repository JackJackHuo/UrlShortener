// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// import url model
const Url = require('../../models/url')
// css variant for main.hbs to load from public/stylesheets/css
const result = 'result'

router.get('/', (req, res) => {

  Url.findOne({ inputUrl: req.query.inputUrl })
     .lean()
     .then(url => res.render('result', { inputUrl: url.inputUrl, shortenedUrl: url.shortenedUrl, stylesheet: result }))
})


module.exports = router