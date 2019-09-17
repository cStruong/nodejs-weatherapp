const dotenv = require('dotenv').config();
const request = require('request');

const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently)
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})

request({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_KEY}&limit=1`, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude);
})