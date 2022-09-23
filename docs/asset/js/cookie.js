$(document).ready(function () {
    if (sessionStorage.getItem('#cookieConsent') !== 'true') {
        setTimeout(function () {
            $("#cookieConsent").fadeIn(200);
        }, 4000);
        $("#closeCookieConsent, .cookieConsentOK, #policyClicked").click(function () {
            $("#cookieConsent").fadeOut(200);
        }); 

        sessionStorage.setItem('#cookieConsent', 'true');
    }
}); 