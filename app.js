const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=04d37208e81a7d28b344e8ad5ea21ed9&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data =  JSON.parse(response.body)
    console.log(data.current)
})