// Mobile redirect.
// Put first so can execute ASAP. To get redirected, you have to be on mobile device 
// and NOT have the cookie that says you want to see regular page version.

//document.cookie='scNoMobile=nomo;expires=;path=/;domain=localhost';

(function(a, b) {
	/*if (/android|blackberry|docomo|fennec|iemobile|ip(hone|od)|^mot-|motsp|^nokia|opera m(ob|in)i|palm( scape|os)|phone|p(ixo|ixi|re)\/|pocket|rim|softbank|symbian|up\.|upsim|upg1|vodafone|wap|windows (ce|phone)/i.test(a) && document.cookie.indexOf("scNoMobile") < 0) {
		window.location = b;
	}*/
if (/android|blackberry|docomo|fennec|iemobile|iphone|^mot-|motsp|^nokia|opera m(ob|in)i|palm( scape|os)|phone|p(ixo|ixi|re)\/|pocket|rim|softbank|symbian|up\.|upsim|upg1|vodafone|wap|windows (ce|phone)/i.test(a) && document.cookie.indexOf("scNoMobile") < 0) {
		window.location = b;
	}	
})

//live redirect
(navigator.userAgent||navigator.vendor||window.opera,'http://m.ibm.com/http/'+window.location.host+window.location.pathname+window.location.search);

// END mobile redirect.