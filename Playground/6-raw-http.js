const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=22f2bd70f6e93f7f1976fad533542293&query=45,75&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  }); // a function and it allows us to register a handler

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error ", error);
});

request.end();
