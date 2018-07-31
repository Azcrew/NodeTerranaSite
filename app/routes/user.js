const crypto = require('crypto')

module.exports = (application) => {
    application.post('/login', (req, res) => {
        let user = req.body
        console.log(user)
        req.assert('username', 'cannot empty').notEmpty()
        req.assert('password', 'cannot empty').notEmpty()

        if (err = req.validationErrors()) {
            res.json(err[0])
            return
        }
        user.username = user.username.toLowerCase()
        user.password = crypto.createHash('md5').update(user.password).digest('hex')
        db.open((err, client) => {
            client.collection('user', (err, collection) => {
                collection.find(user).toArray((err, data) => {
                    if (data.length > 0) {
                        res.json({
                            id: data[0]._id,
                            username: user.username,
                            valid: true
                        })
                        console.log('Usuario Conectado ' + user.username)
                    } else {
                        res.json('incorrect login')
                    }
                    client.close()
                })
                client.close()
            })
        })
    })
    application.post('/user', (req, res) => {
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
        db.open(function (err, client) {
            client.collection('user', function (err, collection) {
                collection.find({ username: user.username }).toArray(function (err, data) {
                    if (data.length == 0) {
                        collection.insert(user)
                        res.json('registered user')
                        client.close()
                        console.log('Novo Usuario ' + req.body.username)
                        return
                    }
                    res.json({})
                    client.close()
                })
            })

        })

    })
    application.get('/user/:username', (req, res) => {
        let user = req.params.username
        db.open(function (err, client) {
            client.collection('user', function (err, collection) {
                if (user) {
                    collection.find({ username: user }).toArray(function (err, data) {
                        res.json(data.length)
                    })
                }
            })
            client.close()
        })
    })
}