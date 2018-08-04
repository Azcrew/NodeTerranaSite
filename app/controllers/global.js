module.exports.contact = function (application, req, res) {
    res.render('global/contact')
}
module.exports.documentation = function (application, req, res) {
    res.render('global/documentation')
}
module.exports.messenger = function (application, req, res) {
    res.render('global/messenger', {
        logged: req.session.valid,
        username: req.session.username
    })
}
module.exports.navbar = function (application, req, res) {
    res.render('global/navbar', {
        logged: req.session.valid,
        username: req.session.username
    })
}
module.exports.search = function (application, req, res) {
    res.render('global/search', { result: {} })
}
module.exports.system = function (application, req, res) {
    res.render('global/system')
}