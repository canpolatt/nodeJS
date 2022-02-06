const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=22f2bd70f6e93f7f1976fad533542293&query=&units=f";

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body); // parse the JSON string
//   //   console.log(data.current);
//   //console.log(response.body.current);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out." +
//         " It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather

const geoCodingURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FuLXBvbGF0IiwiYSI6ImNremJuY3lhNTBlcnUyb250emp0a2Rpd3IifQ.OpR7YYgYEhOpoCxIMWo2ZQ&limit=1";

request({ url: geoCodingURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
