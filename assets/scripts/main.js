(spksdk = window.spksdk || []).push({
  widget_id: "wi-5942",
  element: "sp-wi-5942"
});
document.onSPKLVideoEnd = function () {
	deviceId=window.parent.deviceId;
	window.parent.WatchingAds();
window.parent.document.getElementById('iframeid').src= 'ads.html'
}

var WatchingAds=function (){
		
//var _mac= urlParams.get('mac');
var url="https://newsmartgroup.net/api/FreeWifi/NewAds/"+deviceId
	$.ajax({
		type:"post",
  url:url ,
 
	   Accept:'*/*',
  success: function(res){
	  console.log("res:",res);
	},
	error: function(error) {
            console.log("error: ",error);
          }
});
	}


