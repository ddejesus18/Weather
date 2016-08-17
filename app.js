var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB83AKi087BJ9AxX1j40Bg5I8GSp8i6hVw", false);
xhr.send();

var apiKey = "AIzaSyB83AKi087BJ9AxX1j40Bg5I8GSp8i6hVw";
console.log(xhr.status);
console.log(xhr.statusText);
//get geolocation and add the lat and lon directly to the url. Is this possible?

 window.onload = function() {
   var startPos;
   var geoSuccess = function(position) {
     startPos = position;
     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
   };
   navigator.geolocation.getCurrentPosition(geoSuccess);
 };
