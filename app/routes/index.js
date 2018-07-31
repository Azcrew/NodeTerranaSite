module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.home(application, req, res)
    })
    application.post('/', function (req, res) {
        application.app.controllers.index.login(application, req, res)
    })
}