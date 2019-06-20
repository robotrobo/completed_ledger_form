var createCORSRequest = function (method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
};

var url = '171.61.7.36:9000';
var method = 'POST';
var xhr = createCORSRequest(method, url);

xhr.onload = function () {
    console.log(xhr);
    // Success code goes here.
};

xhr.onerror = function () {
    // Error code goes here.
    console.error('error');
};

xhr.send();