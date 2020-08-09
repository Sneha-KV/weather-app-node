const request = require('request');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// const url = 'http://api.weatherstack.com/current?access_key=806f2b1e855f12d49ab2aef60eaf2a2a&query=&units=f';
const forecast = (latitude, longitude,units,  callback) => {
    const forecastUrl = 'http://api.weatherstack.com/current?access_key=806f2b1e855f12d49ab2aef60eaf2a2a&query='+latitude+','+longitude+'&units='+units;
    request({url: forecastUrl , json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather Service!');
        } else if(response.body.error) {
            callback(response.body.error.code+ ' Unable to find Location.');
        } else {
            const locationObj = response.body.location;
            const currentObj = response.body.current;
            data = {
                location: locationObj.name,
                weather: currentObj.weather_descriptions[0],
                currentTemp: currentObj.temperature,
                feelsLike: currentObj.feelslike
            }

            callback(undefined,data);
        }
    })
    

}



module.exports = forecast;