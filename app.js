const inputCity = document.querySelector('.cityInput')
const formSearch = document.querySelector('.formSearch')
const btn = document.querySelector('.btnSearch')
const cityName = document.querySelector('.cityName')
const iconWeather = document.querySelector('.iconWeather')
const desWeather = document.querySelector('.desWeather')
const tempWheater = document.querySelector('.temp')
const humidityWeater = document.querySelector('.humidity')

btn.addEventListener('click', weather)

function weather(e) {
  e.preventDefault()
  const city = inputCity.value
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e77fa778cddc1c86d94bf65e5f487590`)
    .then(data => data.json() )
      .then(jsonData => {
        console.log(jsonData);
          cityName.innerHTML = jsonData.name
            iconWeather.setAttribute("src", `http://openweathermap.org/img/wn/${jsonData.weather[0].icon}.png`) 
              desWeather.innerHTML = jsonData.weather[0].description
                tempWheater.innerHTML = Math.round(jsonData.main.temp) + "°"
                  humidityWeater.innerHTML = jsonData.main.humidity + "%"

      })
}


  