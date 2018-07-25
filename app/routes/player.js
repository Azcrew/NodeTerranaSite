module.exports = function (application) {
    application.get('/player', function(req, res) {
        application.app.controllers.player.home(application, req, res)
    })
}