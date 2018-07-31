let app = require('./config/server')

const port = 3000

let server = app.listen(port, function () {
    console.log('Express and Soket.io listen on port ' + port)
})

let io = require('socket.io').listen(server)

io.on('connection',   (socket) => {
	console.log('user connected')
})