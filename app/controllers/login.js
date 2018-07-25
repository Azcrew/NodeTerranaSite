module.exports.login = function (application, req, res) {
    req.assert('username', '').notEmpty()
    req.assert('password', '').notEmpty()

    if (req.validationErrors()) {
        res.render('home/index')
        return
    }

    var connection = application.config.dbConn
    var UserDAO = new application.app.models.UserDAO(connection)

    res.send('crou essa merda')

}
module.exports.newUser = function (application, req, res) {
    req.assert('name', 'nao pode ser vazil').notEmpty()
    req.assert('username', '...').notEmpty()
    req.assert('password', '...').notEmpty()
    req.assert('repeat', 'password dont math').custom(function(val){ return val === req.body.password })

    if (errors = req.validationErrors()) {
        res.json(req.body)
        return
    }



    var connection = application.config.dbConn
    var UserDAO = new application.app.models.UserDAO(connection)

    UserDAO.newUser(req.body, res)

    // res.send('usuario cadastrado')
}