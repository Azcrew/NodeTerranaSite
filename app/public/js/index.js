$(document).ready(() => {
    $('#sidebar-toggle-a').on('click', function () {
        $('#sidebar').toggleClass('active')
    })
    $('#sidebar-toggle-b').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    var socket = io.connect('https://' + window.location.hostname + ':443')
    socket.on('disconnect', () => {
        // ;D Temp code to simp view
        setTimeout(() => {
            location.reload()
        }, 1500)
    })

})