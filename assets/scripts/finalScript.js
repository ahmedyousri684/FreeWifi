var clicks=0;
	var closeWindow= function(){
 $('#sp-wi-9052 .item-image').click();
 clicks=clicks+1;
 if(clicks>2 && seconds<=0)
 {  window.location.href = "https://www.youtube.com/watch?v=J7SOfbFzY-E";
 }
	
	}
		var urlParams = new URLSearchParams(window.location.search);
    var sessionId= urlParams.get('session')?.replaceAll(":","");
var SetRole=function (){
				
		var data={

  "confirm_reauthorize": true,
  "reauthorize_profile": "Final_Role [authenticated]"

};

var url="https://erfreewifi.com/api/session/"+sessionId+"/reauthorize"
//var url="https://192.168.20.5/api/session/"+sessionId+"/reauthorize"
	
	$.ajax({
		type:"Post",
  url:url ,
  data:JSON.stringify(data),
   headers: {
            "Authorization": 'Bearer eb8e110bd1a6f6107f7aa2f9bab33649755192a7',
	'Content-Type': 'application/json'
          },
		  contentType: "application/json; charset=utf-8",
	   Accept:'*/*',
  success: function(res){
	  console.log("res:",res);
	
	},
	error: function(error) {
            console.log("error: ",error);
          }
});
	}
  

var seconds=4
    var x = setInterval(function () {

    
        seconds=seconds-1;
        document.getElementById("closeBtn").innerHTML = seconds ;

          if (seconds == 3) {
			SetRole();
		  }
       
        if (seconds < 1) {
			
            clearInterval(x);
			        document.getElementById("closeBtn").innerHTML = " إنهاء ";

closeWindow();
        }
	//	window.location.hash = '#SpId';
document.getElementById('SpId').scrollIntoView()		
		
    }, 1000);