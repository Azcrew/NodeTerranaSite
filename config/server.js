const bodyParser = require('body-parser')
const consign = require('consign')
const express = require('express')
const expressSession = require('express-session')
const expressValidator = require('express-validator')
const multiParty = require('connect-multiparty')

let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

app.use(express.static('./app/public'))

app.use(expressSession({
    secret: "qpzmwonxeibcrubvtyçalskdjfhg",
    resave: true,
    saveUninitialized: true
}))
app.use(expressValidator())

app.use(multiParty())

// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//     res.setHeader('Access-Control-Allow-Credentials', true)
    
//     next()
// })

consign()
.include('./config/dbConn.js')
    .then('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app)

module.exports = app