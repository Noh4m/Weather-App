// Variable
const inputCity = document.querySelector('.cityInput')
const formSearch = document.querySelector('.formSearch')
const btn = document.querySelector('.btnSearch')
const cityName = document.querySelector('.cityName')
const iconWeather = document.querySelector('.iconWeather')
const desWeather = document.querySelector('.desWeather')
const tempWheater = document.querySelector('.temp')
const humidityWeater = document.querySelector('.humidity')

btn.addEventListener('click', weather)
// Function for have Weather of the city
async function weather(e) {
  e.preventDefault()
    try {
      const city = inputCity.value
      // Get the Data from the api
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e77fa778cddc1c86d94bf65e5f487590`)
      // Transform de the data in a Json
          const dataJason = await data.json() 
            console.log(dataJason);
              cityName.innerHTML = dataJason.name
                iconWeather.setAttribute("src", `http://openweathermap.org/img/wn/${dataJason.weather[0].icon}.png`) 
                  desWeather.innerHTML = dataJason.weather[0].description
                    tempWheater.innerHTML = Math.round(dataJason.main.temp) + "°"
                      humidityWeater.innerHTML = dataJason.main.humidity + "%"
    } catch (error) {
      console.log('City not found')
    }
}


  