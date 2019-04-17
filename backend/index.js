require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const itemsRouter = require('./routes/items')
const usersRouter = require('./routes/users')

const DB_URI = process.env.MONGO_LOCAL_CONN_URL

const FRONTEND_URI = `http://localhost:3000` // CHANGE THIS!!!

const app = express()

const environment = process.env.NODE_ENV // development
const stage = require('./config')[environment]

// middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (environment !== 'production') {
  app.use(logger('dev'))
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URI)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
})

// connect to DB
mongoose
  .connect(DB_URI, { 
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
app.use('/api/users', usersRouter)


app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`)
})