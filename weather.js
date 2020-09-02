const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req, res){
  // console.log("received");

  const query=req.body.cityName;
  const key=process.env.API_KEY;

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ key+ "&units=metric";
  https.get(url, function(response) {
    // console.log(response);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The temp in "+ query + " is " + temp + " degreee celsius</h1>");
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<img src=" + iconURL + ">");
      res.send();
    })
  })

});



app.listen(3000, function() {
  console.log("working");
})
