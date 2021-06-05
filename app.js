const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=04d37208e81a7d28b344e8ad5ea21ed9&query=28.645068,77.2357991&units=f'

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.' )
})