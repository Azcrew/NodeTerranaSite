const bcrypt = require('bcryptjs')
const url = 'http://azcrew.ddns.net'

module.exports.login = (application, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', url)

    let user = req.body

    req.assert('username', 'Preencha todos os campos').notEmpty()
    req.assert('password', 'Preencha todos os campos').notEmpty()

    if (err = req.validationErrors()) {
        res.json(err[0])
        return
    }

    user.username = user.username.toLowerCase()
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash
        });
    });

    application.config.mongo('user', (err, collection) => {
        collection.find(user).toArray((err, data) => {
            if (data.length === 1) {

                req.session.id = data[0]._id
                req.session.username = user.username,
                    req.session.valid = true

                res.json({
                    msg: 'Entrou',
                    valid: true
                })
                collection.close()
                return
            }
            res.json({
                msg: 'Login Incorreto',
                valid: false
            })
        })
    })
}
module.exports.create = (application, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', url)

    let user = req.body

    req.assert('name', 'cannot empty').notEmpty()
    req.assert('username', 'cannot empty').notEmpty()
    req.assert('password', 'cannot empty').notEmpty()
    req.assert('repeat', 'password dont math').custom(function (val) { return val === req.body.password })

    if (err = req.validationErrors()) {
        res.json(err[0])
        return
    }
    user.username = user.username.toLowerCase()
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash
        });
    });
    delete user.repeat

    application.config.mongo('user', (err, collection) => {
        collection.find({ username: user.username }).toArray(function (err, data) {
            if (data.length == 0) {
                collection.insert(user)
                res.json('registered user')
                console.log('Novo Usuario ' + req.body.username)
                collection.close();
                return
            }
            res.json({})
        })

    })
}
module.exports.check = (application, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    let user = req.params.username || {}

    application.config.mongo('user', (err, collection) => {
        collection.find({ username: user }).toArray(function (err, data) {
            res.json(data.length)
            collection.close()
            return
        })
    })
}