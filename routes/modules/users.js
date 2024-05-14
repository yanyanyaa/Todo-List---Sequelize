const express = require('express')
const router = express.Router()

// 載入資料

// 路由設定
router.get('/register', (req, res) => {
  res.render('register')
})

// router.post('/register', (req, res) => {
// })

router.get('/login', (req, res) => {
  res.render('login')
})

// router.post('/login', (req, res) => {

// })

// router.get('/logout', (req, res) => {

// })

module.exports = router