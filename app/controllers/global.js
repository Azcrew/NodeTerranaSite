module.exports.contact = function (application, req, res) {
    res.render('global/contact')
}
module.exports.documentation = function (application, req, res) {
    res.render('global/documentation')
}
module.exports.navbar = function (application, req, res) {
    if (req.sesion) var valid = true
    res.render('global/navbar', { logged: valid })
}
module.exports.search = function (application, req, res) {
    res.render('global/search', { result: {} })
}
module.exports.system = function (application, req, res) {
    res.render('global/system')
}