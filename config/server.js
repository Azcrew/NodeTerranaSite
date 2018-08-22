const bodyParser = require('body-parser')
const consign = require('consign')
const exphbs = require('express-handlebars')
const express = require('express')
const expressSession = require('express-session')
const expressValidator = require('express-validator')
const MongoStore = require('connect-mongo')(expressSession)
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

app.use(express.static('./app/public', {
    // dotfiles: 'allow',
    // maxage: '10d',
    // setHeaders: function (res, path) {
    //     res.setHeader('Vary', 'Accept-Encoding')
    //     res.setHeader('Accept-Encoding', 'gzip')
    //     res.setHeader("Cache-Control", "public, max-age=2592000");
    //     res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    // }
}))

app.use(expressSession({
    cookie: { secure: true },
    resave: false,
    saveUninitialized: false,
    secret: "qpzmwonxeibcrubvtyçalskdjfhgmooncake",
    store: new MongoStore({
        url: 'mongodb://azcrew.ddns.net/terrana',
        ttl: 24 * 24 * 60 * 60
    })
}))
app.use(expressValidator())

app.use(multiParty())

app.use('/*', (req, res, next) => {
    res.setHeader('Vary', 'Accept-Encoding')
    res.setHeader('Accept-Encoding', 'gzip')

    next();
});

consign()
    .include('./config/mongo.js')
    .then('./app/controllers')
    .then('./app/models')
    .then('./app/routes')
    .into(app)

module.exports = app