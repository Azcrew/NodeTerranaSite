module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.home(application, req, res)
    })
    application.post('/', function (req, res) {
        application.app.controllers.index.home(application, req, res)
    })
    application.get('/contact', function (req, res) {
        application.app.controllers.index.contact(application, req, res)
    })
    application.get('/documentation', function (req, res) {
        application.app.controllers.index.documentation(application, req, res)
    })
    application.post('/', (req, res) => {
        application.app.controllers.login.login(application, req, res)
    })
    application.get('/system', function (req, res) {
        application.app.controllers.index.system(application, req, res)
    })
}