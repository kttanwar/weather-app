const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=04d37208e81a7d28b344e8ad5ea21ed9&query=28.645068,77.2357991&units=f'

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error) {
//         console.log('Unable to find location!')
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.' )
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia29uYXJrIiwiYSI6ImNrcGtzemtmbDF5bDMyd3JpajJqMnVlbzIifQ.SaRTjKAtR619JJLHLgZb4g&limit=1'

// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to location services!')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search.')
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})