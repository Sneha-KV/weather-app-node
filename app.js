const request = require('request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const location = process.argv[2];

//weather stack key - 806f2b1e855f12d49ab2aef60eaf2a2a
// mapbox key- pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g

if(location != undefined) {
    // GEOCODING: Address-> Lat/Long -> Weather stack
// second argument -> object destructuring
    geoCode(location,(error, {latitude, longitude, location} = {}) => {
        if(error != undefined) {
            return console.log(error)
        } 
            // console.log(`Name: ${data.location}, Coordinates: Latitude - ${data.latitude}, Longitude - ${data.longitude}`);
            forecast(latitude, longitude, 'm', (error, {weather, currentTemp, feelsLike} = {}) => {
                if(error) {
                    return console.log(error);
                }
                console.log(`In ${location}, weather description is ${weather}, it is currently ${currentTemp} degrees but it feels like ${feelsLike}`)
              })
        
    })
} else {
    console.log('please provide a Location')
}





