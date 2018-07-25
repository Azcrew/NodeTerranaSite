const bodyParser = require('body-parser')
const consign = require('consign')
const express = require('express')
const expressSession = require('express-session')
const expressValidator = require('express-validator')

let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))

app.use(bodyParser.urlencoded({'extended': true}))
app.use(bodyParser.json())

app.use(expressValidator())

app.use(expressSession({
    secret: "qpzmwonxeibcrubvtyçalskdjfhg",
    resave: false, 
    saveUninitialized: false
}))

consign()
    .include('./config/dbConn.js')
    .then('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app)

module.exports = app