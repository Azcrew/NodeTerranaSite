module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.home(application, req, res)
    })
    application.post('/', function (req, res) {
        application.app.controllers.user.login(application, req, res)
    })
}