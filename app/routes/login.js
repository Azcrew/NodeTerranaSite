module.exports = function(application) {
    application.post('/login', function(req, res) {
        application.app.controllers.login.login(application, req, res)
    })
    application.get('/register', function(req, res){
        application.app.controllers.login.register(application, req, res)
    })
    application.post('/register', function(req, res){
        application.app.controllers.login.newUser(application, req, res)
    })
}