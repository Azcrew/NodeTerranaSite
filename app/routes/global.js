module.exports = (application) => {
    application.get('/navbar/:logged', (req, res) => {
        application.app.controllers.index.navbar(application, req, res)
    })
    application.get('/contact', function (req, res) {
        application.app.controllers.index.contact(application, req, res)
    })
    application.get('/documentation', function (req, res) {
        application.app.controllers.index.documentation(application, req, res)
    })
    application.get('/system', function (req, res) {
        application.app.controllers.index.system(application, req, res)
    })
    application.post('/search', function (req, res) {
        application.app.controllers.index.search(application, req, res)
    })
}