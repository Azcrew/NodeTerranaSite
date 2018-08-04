module.exports.home = function (application, req, res) {
    res.render('home/index', { session: req.session })
}
module.exports.login = function (application, req, res) {
    res.render('home/index', { session: {} })
}
