module.exports = (io) => {
    io.on('connection', (socket) => {
        // console.log('User ' + socket.id + ' Connected on Socket')

        socket.on('', (socket) => {

        })

        socket.on('disconnect', (socket) => {
            // console.log('User ' + socket.id + ' Disconnected from Socket')
        })
    })
}