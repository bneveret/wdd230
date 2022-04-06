const OWAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9832518&lon=-77.0977205&units=imperial&appid=846857d20f89e974635e846ef8d07860";
weather = document.querySelector('#weather');
forecast = document.querySelector('#forecast');

fetch(OWAPI)
.then((response) => response.json())
.then((jsObject) => {
    let icon = document.createElement('img');
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', jsObject.current.weather.description);
    let temp = document.createElement('p');
    temp.textContent = `Temperature: ${jsObject.current.temp}°F`;
    let humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${jsObject.current.humidity}%`;
    let description = document.createElement('p');
    description.textContent = `Description: ${jsObject.current.weather[0].description}`;
    weather.appendChild(icon);
    weather.appendChild(temp);
    weather.appendChild(humidity);
    weather.appendChild(description);

    let today, tomorrow, nextday;
    switch (new Date().getDay()) {
        case 0:
            today = "Sunday";
            tomorrow = "Monday";
            nextday = "Tuesday";
            break;
        case 1:
            today = "Monday";
            tomorrow = "Tuesday";
            nextday = "Wednesday";
            break;
        case 2:
            today = "Tuesday";
            Tomorrow = "Wednesday";
            nextday = "Thursday";
            break;
        case 3:
            today = "Wednesday";
            tomorrow = "Thursday";
            nextday = "Friday";
            break;
        case 4:
            today = "Thursday";
            tomorrow = "Friday";
            nextday = "Saturday";
            break;
        case 5:
            today = "Friday";
            tomorrow = "Saturday";
            nextday = "Sunday";
            break;
        case 6:
            today = "Saturday";
            tomorrow = "Sunday";
            nextday = "Monday";
    }

    let day1 = document.createElement('p');
    day1.textContent = `Today: ${jsObject.daily[0].temp.day}°F`;
    let day2 = document.createElement('p');
    day2.textContent = `${tomorrow}: ${jsObject.daily[1].temp.day}°F`;
    let day3 = document.createElement('p');
    day3.textContent = `${nextday}: ${jsObject.daily[2].temp.day}°F`;
    forecast.appendChild(day1);
    forecast.appendChild(day2);
    forecast.appendChild(day3);

    if (jsObject.alerts) {
        jsObject.alerts.forEach(displayAlerts);
    }
});

function displayAlert(alert_item) {
    alert(alert_item);
}