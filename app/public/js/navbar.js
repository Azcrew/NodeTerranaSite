$(document).ready(() => {
    let url = window.location.protocol + '//' + window.location.hostname
    // Usuario dispnivel
    $('#username').change(function () {
        $.ajax({
            url: url + '/user/' + $(this).val(),
            success: (res) => {
                if (res == 1) {
                    $('#msg').addClass('alert alert-danger text-sm-center')
                    $('#msg').removeClass('alert-success')
                    $('#msg').html('Usuario indisponível.')
                } else {
                    $('#msg').addClass('alert alert-success text-sm-center')
                    $('#msg').removeClass('alert-danger')
                    $('#msg').html('Usuario disponível.')
                }
            }
        })
    })
    
    // Request Login
    $('#login').submit(() => {
        $.ajax({
            url: url + '/login',
            method: 'POST',
            data: {
                username: $('#luser').val(),
                password: $('#lpass').val(),
            },
            success: (res) => {
                console.log(res)
                
                window.location.href = 'https://' + window.location.host
            }
        })
        return false;
    })
    // Request Register
    $('#register').submit(() => {
        $.ajax({
            url: url + '/user',
            method: 'POST',
            data: {
                name: $('#name').val(),
                username: $('#username').val(),
                password: $('#password').val(),
                repeat: $('#repeat').val(),
            },
            success: () => {
                $('#register-dd').dropdown('toggle')
            }
        })
        return false;
    })
});