const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const createError = require('http-errors')

const indexRouter = require('./routes/index')
const itemsRouter = require('./routes/items')

const URI = `mongodb://localhost:27017/recycling_db`

const app = express()

// middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect to DB
mongoose
  .connect(URI, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
   })
  .then(console.log('Successful connection to database'))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`)
  })

// routes
app.use('/', indexRouter)
app.use('/api/items', itemsRouter)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))