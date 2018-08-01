const crypto = require('crypto')

module.exports.login = (application, req, res) => {
    let user = req.body
    req.assert('username', 'Não pode estar vazio').notEmpty()
    req.assert('password', 'Não pode estar vazio').notEmpty()

    if (err = req.validationErrors()) {
        res.json(err[0])
        return
    }
    user.username = user.username.toLowerCase()
    user.password = crypto.createHash('md5').update(user.password).digest('hex')

    application.config.mongo('user', (err, collection) => {
        collection.find(user).toArray((err, data) => {
            if (data.length === 1) {
                /**
                 * CREATE SESSION
                 */
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
    user.password = crypto.createHash('md5').update(user.password).digest('hex')
    delete user.repeat

    console.log(user)
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
    let user = req.params.username || {}
    application.config.mongo('user', (err, collection) => {
        collection.find({ username: user }).toArray(function (err, data) {
            res.json(data.length)
            collection.close()
            return
        })
    })
}