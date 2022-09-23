/* Image Function */
window.onload = function () {
    var html = document.getElementsByTagName('html');
    for (var i = 0; html = html[i++];) {
    html.ondragstart = function () {
        return false;
      };
    }
};

/* Disabled Function */

/* Right click disabled */
$("html").on("contextmenu", function(e) {
    return false;
});

/* Copy paste disabled */
$('html').bind('cut copy', function (event) {
    event.preventDefault();
});

/* Keyboard prefixes disabled */

document.onkeydown = function (e) {

    // disable F12 key
    if (e.keyCode == 123) {
        return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

let a = document.querySelectorAll('.anothaseec');
let b = document.querySelector('#secur');

a.forEach(x => {
    x.addEventListener('click', event => {
        b.click();
    });
});

let c = document.querySelectorAll('.anothitt');
let d = document.querySelector('#its');

c.forEach(z => {
    z.addEventListener('click', event => {
        d.click();
    });
});

$('#send_message').on('click', function () {
    var email = $("#email").val()
    var name = $("#name").val()
    var message = $("#message").val()

    var verification = (email != "" && email != " " && email != null) && (name != "" && name != " " && name != null) && (message != "" && message != " " && message != null)

    if (verification) {
        swal.fire({
            html: "Sending your message..",
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "info",
            timerProgressBar: true,
            timer: 1500,
            didOpen: () => {
                timerInterval = setInterval(() => { }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then(() => {
            $.ajax({
                url: "/Home/Send",
                type: "POST",
                dataType: "json",
                data: {
                    email: email,
                    name: name,
                    msg: message
                },
                success: function (result) {
                    if (result == "sent") {
                        swal.fire({
                            html: "Your message has been sent.",
                            allowEscapeKey: false,
                            allowOutsideClick: false,
                            showCancelButton: false,
                            showConfirmButton: false,
                            icon: "info",
                            timerProgressBar: true,
                            timer: 1500,
                            didOpen: () => {
                                timerInterval = setInterval(() => { }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            }
                        })
                        $("#email").val('');
                        $("#name").val('');
                        $("#message").val('');
                    } else {
                        swal.fire({
                            html: "Something went wrong.",
                            allowEscapeKey: false,
                            allowOutsideClick: false,
                            showCancelButton: false,
                            showConfirmButton: false,
                            icon: "error",
                            timerProgressBar: true,
                            timer: 1500,
                            didOpen: () => {
                                timerInterval = setInterval(() => { }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            }
                        })
                    }
                }
            })
        })
    } else {
        swal.fire({
            html: "Fields should be filled up.",
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "warning",
            timerProgressBar: true,
            timer: 1500,
            didOpen: () => {
                timerInterval = setInterval(() => { }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })
    }
});

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#email');
    const email = $('#email').val();
    $result.css('border', '2px solid red');

    if (validateEmail(email)) {
        $result.css('border', '1px solid #ced4da');
    } else {
        $result.css('border', '2px solid red');
    }
    return false;
}

$('#email').on('input', validate);