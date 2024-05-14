const express = require('express')
const router = express.Router()

// 載入資料

// 路由設定
router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router