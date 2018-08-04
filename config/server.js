const bodyParser = require('body-parser')
const consign = require('consign')
const express = require('express')
const expressSession = require('express-session')
const expressValidator = require('express-validator')
const handlebars = require('express-handlebars')
const multiParty = require('connect-multiparty')

let app = express()

app.engine('hbs', handlebars({extname: 'html', defaultLayout: 'layout', layoutsDir: './app/views/layout' }))
app.set('view engine', 'hbs')
app.set('views', './app/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

app.use(express.static('./app/public', { dotfiles: 'allow' }))

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: "qpzmwonxeibcrubvtyçalskdjfhgmooncake",
    cookie: { secure: true }
}))
app.use(expressValidator())

app.use(multiParty())

consign()
    .include('./config/mongo.js')
    .then('./app/controllers')
    .then('./app/models')
    .then('./app/routes')
    .then('./app/socket')
    .into(app)

module.exports = app