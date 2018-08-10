module.exports = (io) => {
    var messenger = io.of('/messenger')
    messenger.on('connection', (socket) => {
        socket.on('', (socket) => {
        })

        socket.on('disconnect', (socket) => {
        })
    })
}