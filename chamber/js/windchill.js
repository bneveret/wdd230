var tempf = 30;
var wind_speed = 50;

if (tempf <= 50 && wind_speed > 30) {
var wind_chill = (35.74 + (0.6215*tempf) - (35.75*Math.pow(wind_speed, 0.16)) + (0.4275*tempf*Math.pow(wind_speed, 0.16))).toFixed(1);
document.querySelector("#windChill").innerHTML = 'Wind Chill: ' + wind_chill + '&deg;F';
}