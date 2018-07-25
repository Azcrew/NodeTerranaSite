function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.newUser = function (user, res) {
    this._connection.open(function (err, client) {
        // if (err) return
        client.collection('user', function (err, collection) {
            // if (err) return
            collection.find({ username: { $eq: user.username } }).toArray(function (err, data) {
                if (data.length == 0) {
                    collection.insert(user)
                }
                else {
                    client.close()
                    res.render('global/error', {
                        data: {
                            type: 'error',
                            msg: 'Usuario indisponivel'
                        }
                    })
            return
        }
                client.close()
                res.render('global/error', {
                data: {
                    type: 'success',
                    msg: 'usuario cadastrado',
                    url: '/'
                }
            })
            })
})
    })
}

UserDAO.prototype.auth = function (user, next) {
    this._connection.open(function (err, client) {

    })
}
module.exports = function () {
    return UserDAO
}