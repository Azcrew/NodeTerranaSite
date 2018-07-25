module.exports.home = function (application, req, res) {
    res.render('home/index')
}
module.exports.contact = function (application, req, res) {
    res.send('Contatos')
}
module.exports.documentation = function (application, req, res) {
    res.send('Documentção')
}
module.exports.navbar = function (application, req, res) {
    res.render('global/navbar')
}
module.exports.search = function (application, req, res) {
    res.json(req.body)
}
module.exports.system = function (application, req, res) {
    res.send('Sistema')
}