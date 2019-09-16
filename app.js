const request = require('request');

const url = 'https://api.darksky.net/forecast/1486ac271af238eab2a4586d6523c695/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})