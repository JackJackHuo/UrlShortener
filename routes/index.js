// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// import routes modules
const home = require('./modules/home')
const result = require('./modules/result')

router.use('/' , home)
router.use('/result', result)


module.exports = router