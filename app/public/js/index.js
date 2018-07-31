$(document).ready(() => {
    var socket = io('http://' + window.location.hostname + ':3000')

    socket.on('masterLogin', (master) => {

        $('#chat-news').html = 'O Mestre ' + master.username + ' acaba de entrar'

    })

    $().ready(function () {
        $.ajax({
            url: '/navbar/false',
            method: 'GET',
            success: (res) => {
                $('#default-navbar').html(res)
            }
        })
    })
})