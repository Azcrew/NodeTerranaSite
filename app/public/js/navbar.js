$(document).ready(() => {
    $('#username').change(function () {
        $.ajax({
            url: 'http://' + window.location.hostname + ':8000/user/' + $(this).val(),
            //method: 'GET',
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
    $('#login').submit(() => {
        alert()
    })
    $('#register').submit(() => {
        alert()
        var url = 'http://' + window.location.hostname + ':8000/user'
        console.log(url)
        var data = {
            name: $('#name').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            repeat: $('#repeat').val(),
        }

        $.ajax({
            url: url,
            method: 'POST',
            //type: "POST",
            data: data,
            dataType: 'application/x-www-form-urlencoded',
            success: function (res) {
                alert(res)
                window.location.href = 'http://' + window.location.host
            }
        })
        return false;
    })
});