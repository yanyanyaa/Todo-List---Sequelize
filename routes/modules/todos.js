const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

// 路由設定
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  return User.findByPk(UserId)
    .then(user => {
      if (!user) {
        throw new Error('user not found!')
      }
      return Todo.create({
        name,
        UserId
      })
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return User.findByPk(UserId)
    .then(user => {
      if (!user) {
        throw new Error('user not found!')
      }
      return Todo.findOne({
        where: { id, UserId }
      })
    })
    .then(todo => {
      res.render('detail', { todo: todo.toJSON() })
    })
    .catch(error => console.log(error))
})

// router.get('/:id/edit', (req, res) => {
//   res.render('edit')
// })

// router.put('/:id', (req, res) => {

// })

// router.delete('/:id', (req, res) => {

// })

module.exports = router