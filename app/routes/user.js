module.exports = (application) => {
    application.post('/login', (req, res) => {
        application.app.controllers.user.login(application, req, res)
    })
    application.post('/user', (req, res) => {
        application.app.controllers.user.create(application, req, res)
    })
    application.get('/user/:username', (req, res) => {
        application.app.controllers.user.check(application, req, res)
    })
}