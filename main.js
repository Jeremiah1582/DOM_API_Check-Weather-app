import { api  } from './config.js'

var key = api.key;
var base = api.base;
 
// console.log(process.env.API_KEY);
const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress',function(event){

    if ( event.keyCode == 13 ){ // if i press "Enter", run the script in if body

        getResults(searchbox.value) // berlin
    }

})

function getResults(city){

    // ! Step 1: Fetch the link! 
    // ! Note: If you are planning to change the link, write it dynamically by using parameters!

    fetch(`${base}${city}&units=metric&APPID=${key}`) // param => city name
    //fetch(`${api.base}${city}${api.base2}${api.key}`)
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fcc8de7015bbb202209bbf0261babf4c

                // ! Step 2: After fetch the link, read it and parse it ! Write same the below part all the time! 
                .then( weather => weather.json()) // access the link, parse it and get the informations inside the API
        
                // ! Step 3: Pass all information into a parameter name!
                .then((arg1) =>{
                    let city = document.querySelector('.location .city');
                    city.innerText = `${arg1.name},${arg1.sys.country}`;

                    let temp = document.querySelector('.current .temp');
                    temp.innerHTML=`${arg1.main.temp}<span> °c </span>`;

                    let weather_el= document.querySelector('.current .weather');
                    weather_el.innerText=arg1.weather[0].main;

                    let minmax = document.querySelector('.hi-low');
                    minmax.innerText = `${arg1.main.temp_min} °c/ ${arg1.main.temp_max} °c`;

                    
                    let date = document.querySelector('.location .date');
                    date.innerText = new Date();// Date() return full information about present time

                })



             







    // ! =====================================================================================

    // ? Below part is just explanation about how to define function inside the second then()
                // 1st Way :
           /*      .then((arg1) =>{
                        let city = document.querySelector('.location .city');
                        city.innerText = `${alper.name}`;
                    })
      */
                // 2nd Way:

            /*     .then(
                    function displayResults(arg1){
                        let city = document.querySelector('.location .city');
                        city.innerText = `${arg1.name}`;
                    }
                ) */

                // 3rd Way:

               /*  .then(displayResults) */

    // ! =====================================================================================

}














    // ! =====================================================================================

// ? Below part is just a sample for API object!
/* 
let arg1 = {
    coord: {
    lon: 13.41,
    lat: 52.52
    },
    weather: [
    {
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
    }
    ],
    base: "stations",
    main: {
    temp: 277.36,
    feels_like: 271.36,
    temp_min: 276.15,
    temp_max: 278.15,
    pressure: 1020,
    humidity: 86
    },
    visibility: 10000,
    wind: {
    speed: 6.2,
    deg: 150
    },
    clouds: {
    all: 0
    },
    dt: 1608196269,
    sys: {
    type: 1,
    id: 1262,
    country: "DE",
    sunrise: 1608189165,
    sunset: 1608216755
    },
    timezone: 3600,
    id: 2950159,
    name: "Berlin",
    cod: 200
    }




 */