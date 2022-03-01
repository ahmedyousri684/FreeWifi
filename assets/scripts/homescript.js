var redirect=function(){
	
//	var urlParams = new URLSearchParams(window.location.search);
//var _mac= urlParams.get('mac')?.replaceAll(":","");
window.location.href="/CheckConnection.html"+window.location.search;

	
}
   var countDownDate = new Date(Date.now() + 10000).getTime();

var seconds=6
    var x = setInterval(function () {

      //  var now = new Date().getTime();

       // var distance = countDownDate - now;

       // var seconds = Math.floor((distance+1)/ 1000);

        seconds=seconds-1;
        document.getElementById("openBtn").innerHTML = seconds +" انتظر ";

        //	document.getElementById('iframeid').contentWindow.document.getElementById("BtnRedirect").innerHTML = seconds +" انتظر سيتم توصيلك بالانترنت بعد ";
       
        if (seconds < 1) {
            clearInterval(x);
redirect();
        }
		
		
    }, 1000);
