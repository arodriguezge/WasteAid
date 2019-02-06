const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const createError = require('http-errors')

const indexRouter = require('./routes/index')
const itemsRouter = require('./routes/items')

const DB_URI = `mongodb://localhost:27017/recycling_db`
const FRONTEND_URI = `http://localhost:3000`

const app = express()

// middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URI);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
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

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))