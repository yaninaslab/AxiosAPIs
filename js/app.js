// Function to be called when the Weather Forecast button is clicked
function call_api() {
    document.body.style.backgroundColor = "lightblue";
// URL was taken from the API with the selected params
    axios.request({
       url: "https://api.open-meteo.com/v1/forecast?latitude=43.64&longitude=-79.53&hourly=temperature_2m,precipitation,windspeed_10m",
        
    }).then(weather_success).catch(weather_failure);

}

// Function that makes a successful output from the API
function weather_success(response) {
    var weather_section = document.getElementById("weather_section");
    var weather_message = document.createElement("h1");
    console.log(response);
    weather_message.innerText = response['data']['hourly_units'];
    weather_section.appendChild(weather_message);


}
// Function that is called when something goes wrong
function weather_failure(error) {
    var weather_section = document.getElementById("weather_section");
    var error_message = document.createElement("h1");
    error_message.innerText = "Something went wrong, please refresh the page"; 
    weather_section.appendChild(error_message);

}
// Defining a variable and grabbing its id from the page so that we can add events to call a function when the button is clicked
var weather_forecast = document.getElementById("forecast");
weather_forecast.addEventListener('click', call_api);

