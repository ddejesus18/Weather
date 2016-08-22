var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log(pos.coords);

};
function getLat(pos) {
  var crd = pos.coords;
  return crd.latitude;
}
function getLon(pos) {
  var crd = pos.coords;
  return crd.longitude;
}
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
function loadDoc() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystate = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("it's working");
    }
  };
  xhr.open('GET', "api.openweathermap.org/data/2.5/weather?lat={Coordinates.latitude}&lon={Coordinates.longitude}&APPID=88b762769b10154d4b26076e5c47c8ec", true);
  xhr.send();
}
//need to update so that request is after the page has loaded also confirm whether or not
//we are accessing lat and lon
