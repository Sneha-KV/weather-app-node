const request = require('request');

const geoCode = (address,callback) => {
    const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoicy1rdiIsImEiOiJja2RscTVqeHcxMHVmMnlvOGpuY2YyY2wxIn0.KMhgcXBEltZeryfrG-ck8g&limit=1";

    request({url: geoCodeUrl , json: true},(error,response)=>{
        if(error){
            callback('Unable to Connect to GeoCode Service.');
        } else if (response.body.features.length === 0) {
            callback(' Unable to find Location ' + response.body.query[0] + '. Please try another one');
        } else {
            var dataObj = response.body.features[0],
            data = {
                latitude: dataObj.center[1],
                longitude: dataObj.center[0],
                location: dataObj.place_name
            };
            callback(undefined,data);

        }
    })
}

module.exports = geoCode
