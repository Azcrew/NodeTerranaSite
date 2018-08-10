const bcrypt = require('bcryptjs')

module.exports.login = (application, req, res) => {
    var user = req.body
    req.assert('username', 'Preencha todos os campos').notEmpty()
    req.assert('password', 'Preencha todos os campos').notEmpty()

    if (err = req.validationErrors()) {
        res.json(err[0])
        return
    }

    user.username = user.username.toLowerCase()

    application.config.mongo('user', (err, collection) => {
        collection.find(req.body.username).toArray((err, data) => {
            if (data.length !== 0) {
                if (bcrypt.compareSync(user.password, data[0].password)) {

                    req.session.id = data[0]._id
                    req.session.username = user.username
                    req.session.valid = true

                    res.json({
                        msg: 'Entrou',
                        valid: true
                    })
                    collection.close()
                    return
                }
                else {
                    res.json({
                        msg: 'Senha Incorreta',
                        valid: false
                    })
                    return
                }
            }
            res.json({
                msg: 'Login Incorreto',
                valid: false
            })
            return
        })
    })
}
module.exports.create = (application, req, res) => {
    var user = req.body

    req.assert('name', 'cannot empty').notEmpty()
    req.assert('username', 'cannot empty').notEmpty()
    req.assert('password', 'cannot empty').notEmpty()
    delete user.repeat

    if (err = req.validationErrors()) {
        res.json(err[0])
        return
    }

    user.username = user.username.toLowerCase()
    user.password = bcrypt.hashSync(user.password, 10);

    application.config.mongo('user', (err, collection) => {
        collection.find({ username: user.username }).toArray(function (err, data) {
            if (data.length == 0) {
                collection.insert(user)
                res.json('registered user')
                console.log('Novo Usuario ' + user.username)
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