const OWAPI = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&appid=846857d20f89e974635e846ef8d07860";
fetch(OWAPI)
.then((response) => response.json())
.then((jsObject) => {
    
});