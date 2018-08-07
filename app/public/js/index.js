$(document).ready(() => {
    var socket = io.connect('https://' + window.location.hostname + ':443')

    socket.on('disconnect', () => {
        // ;D Temp code to simp view
        setTimeout(() => {
            location.reload()
        }, 1500)
    })
})