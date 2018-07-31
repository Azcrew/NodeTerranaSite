module.exports = (application) => {
    application.get('/navbar/:logged', (req, res) => {
        application.app.controllers.index.navbar(application, req, res)
    })
    application.post('/search', function (req, res) {
        application.app.controllers.index.search(application, req, res)
    })
}