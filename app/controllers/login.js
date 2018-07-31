module.exports.login = (application, req, res) => {

    console.log(req)

    res.render('home/index', { logged: true })
}