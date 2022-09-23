$(document).ready(function () {
    if (getCookie("HideDiv") != "true") {
        $("#cookieConsent").fadeIn("slow");
    } else {
        $("#cookieConsent").css('display', 'none');
    }
});

$(".cookieConsentOK").on('click', function () {
    setCookie('HideDiv', 'true', 1);
    $("#cookieConsent").fadeOut("slow");
})

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    d.setFullYear(d.getFullYear() + 1);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}