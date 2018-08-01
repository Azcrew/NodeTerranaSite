module.exports = (application) => {
    application.get('/navbar/', (req, res) => {
        application.app.controllers.global.navbar(application, req, res)
    })
    application.get('/contact', function (req, res) {
        application.app.controllers.global.contact(application, req, res)
    })
    application.get('/documentation', function (req, res) {
        application.app.controllers.global.documentation(application, req, res)
    })
    application.get('/system', function (req, res) {
        application.app.controllers.global.system(application, req, res)
    })
    application.post('/search', function (req, res) {
        application.app.controllers.global.search(application, req, res)
    })
}