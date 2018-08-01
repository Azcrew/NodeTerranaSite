module.exports.connection = function (io) {
    io.on('connection', (socket) => {
        console.log('User ' + socket.id + ' Connected on Socket')

        io.on('', (socket) => {

        })

        io.on('close', (socket) => {
            console.log('User ' + socket.id + ' Disconnected from Socket')
        })
    })
}