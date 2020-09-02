# Weather-app
This is a web application that can be used to see the weather of any city, country etc. It uses the [Open weather map](https://openweathermap.org/api) API to access the fetch data of weather at a place using NodeJS with ExpressJS as framework. 
To set up the project :-
* Download the project folder and cd into it.
* Open your terminal and enter the following commands
```
 npm install
 node weather.js
```
* You will need to set your own API key by signing up here [Open weather map](https://openweathermap.org/api). Once key is generated, add it in your `.env file` in front of API_KEY.
I have added a **.env_sample** file to show how to add sample API key. But, you should add it in your **.env** file only. 
* Open `localhost:3000` in your browser.

You should see something like this on successful authentication.

![Demo Screenshot](Screenshot.png)
