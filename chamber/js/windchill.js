const OWAPI = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&appid=846857d20f89e974635e846ef8d07860";
fetch(OWAPI)
.then((response) => response.json())
.then((jsObject) => {
    var tempf = jsObject.main.temp.toFixed(0);
    document.querySelector('#temp').textContent = `${tempf}°F`;
    var wind_speed = jsObject.wind.speed;
    document.querySelector('#speed').textContent = `Wind Speed: ${wind_speed}mph`;
    document.querySelector('#sky').textContent = jsObject.weather.description;
    var iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', jsObject.weather.description);
    if (tempf <= 50 && wind_speed > 30) {
        var wind_chill = (35.74 + (0.6215*tempf) - (35.75*Math.pow(wind_speed, 0.16)) + (0.4275*tempf*Math.pow(wind_speed, 0.16))).toFixed(1);
        document.querySelector("#windChill").innerHTML = 'Wind Chill: ' + wind_chill + '°F';
        }
});
