/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const Full_URL= `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE

  const weatherPromise =fetch(Full_URL) ;
  
  return weatherPromise.then((response)=>{
    return response.json()
  })
 
}

//console.log(getWeatherData("Detroit"));
//console.log("HELOOOO??")
//console.log(getWeatherData("detroit"))
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  //DOM onChange onLoad DOMContentLoaded 
  //EJS 

  getWeatherData(city).then((resDa)=>{
    window["city-name"].innerHTML= (resDa.name);
    document.getElementById("weather-type").innerHTML= (resDa.weather[0].description);
    temp.innerHTML= (resDa.main.temp);
    document.getElementById("min-temp").innerHTML= (resDa.main.temp_min);
    document.getElementById("max-temp").innerHTML= (resDa.main.temp_max);
  
  }).catch((err)=>
  {
    console.log(err)
  })
}
/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
}

