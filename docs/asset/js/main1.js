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