const bodyParser = require('body-parser')
const consign = require('consign')
const exphbs = require('express-handlebars')
const express = require('express')
const expressSession = require('express-session')
const expressValidator = require('express-validator')
const multiParty = require('connect-multiparty')

let app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: './app/views/layout'
}));
app.set('views', './app/views')
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

app.use(express.static('./app/public', { /*dotfiles: 'allow'*/ }))

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
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