let app = require('./config/server')

const port = 3000

app.listen(port, function () {
    console.log('Server listen on port ' + port)
    console.log('## But redirected to 80 ##')
})