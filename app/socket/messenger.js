module.exports = (io) => {
    var messenger = io.of('/messenger')
    messenger.on('connection', (socket) => {
        console.log('User ' + socket.id + ' Connected Messenger')

        socket.on('', (socket) => {

        })

        socket.on('disconnect', (socket) => {
            console.log('User ' + socket.id + ' Disconnected from Socket')
        })
    })
}