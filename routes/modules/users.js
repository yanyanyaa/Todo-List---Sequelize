const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

// 路由設定
router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

router.get('/login', (req, res) => {
  res.render('login')
})

// router.post('/login', (req, res) => {

// })

// router.get('/logout', (req, res) => {

// })

module.exports = router