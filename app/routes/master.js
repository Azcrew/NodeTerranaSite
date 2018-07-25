module.exports = function (application) {
    application.get('/master', function(req, res){
        application.app.controllers.master.home(application, req, res)
    })
}