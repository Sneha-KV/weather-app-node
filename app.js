const request = require('request');
const weather = require('./weatherinfo.js');

const url = 'http://api.weatherstack.com/current?access_key=806f2b1e855f12d49ab2aef60eaf2a2a&query=&units=f'

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response)
//     if (error) {
//         console.log('Unable to connect to Weather Service')
//         console.log(error)
//     } else if(response.body.error){
//         console.log(response.body.error.code+ ' Unable to find Location')
//     } else {
//         const locationObj = response.body.location;
//         const currentObj = response.body.current
//         // console.log();
//         console.log(`In ${locationObj.name} , weather is ${currentObj.weather_descriptions[0]}, it is currently ${currentObj.temperature} degrees  and it feels like ${currentObj.feelslike}`)
//     }
// });
//weather stack key - 806f2b1e855f12d49ab2aef60eaf2a2a
// mapbox key- pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g
//Map box: https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g&limit=1

// GEOCODING: Address-> Lat/Long -> Weather stack

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/los Angeles.json?access_token=pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g&limit=1";
 request({url : geoCodeUrl, json: true}, (error, response)=>{
    if (error) {
        console.log('Unable to connect to Weather Service');
        // console.log(error)
    } else if(response.body.features.length === 0){
        console.log(' Unable to find Location ' + response.body.query[0]);
    } else {
        // sending Address/city  Name
        var data = response.body.features[0];
        console.log(`Name: ${data.place_name}, Coordinates: Latitude - ${data.center[1]}, Longitude - ${data.center[0]}`);
    }
 });