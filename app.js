const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT
app.engine('hbs', exphbs({ defaultLayout: 'main', extname:'.hbs' }))
app.set('view engin', 'hbs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`)
})