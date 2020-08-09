const request = require('request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const location = process.argv[2];


//weather stack key - 806f2b1e855f12d49ab2aef60eaf2a2a
// mapbox key- pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g

if(location != undefined) {
    // GEOCODING: Address-> Lat/Long -> Weather stack

    geoCode(location,(error, data) => {
        if(error != undefined) {
            return console.log(error)
        } 
            // console.log(`Name: ${data.location}, Coordinates: Latitude - ${data.latitude}, Longitude - ${data.longitude}`);
            forecast(data.latitude, data.longitude, 'f', (error, forecastData) => {
                if(error) {
                    return console.log(error);
                }
                console.log(`In ${data.location}, weather description is ${forecastData.weather}, it is currently ${forecastData.currentTemp} degrees  and it feels like ${forecastData.feelsLike}`)
              })
        
    })
} else {
    console.log('please provide a Location')
}





