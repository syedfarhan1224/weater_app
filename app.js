const serch = document.getElementById("search");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const desceription = document.getElementById("desceription");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const imgf = document.getElementById("imgf");
let form = document.querySelector("form");
let main = document.querySelector("main");
let weatherInfo = document.getElementById("weather-info");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (serch.value != "") {
    searchWeather();
  }
});

let id = "9505fd1df737e20152fbd78cdb289b6a";
let url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;
const searchWeather = () => {
  fetch(url + "&q=" + serch.value)
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data);
      if (data.cod == 200) {
        weatherInfo.style.display = "block";
        city.querySelector("h2").innerText = data.name;
        city.querySelector("img").src =
          "https://flagsapi.com/" + data.sys.country + "/shiny/64.png";

        temperature.querySelector("img").src =
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x.png";
        temperature.querySelector("div span").innerText = data.main.temp;
        desceription.innerText = data.weather[0].description;

        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
      } else {
        main.classList.add("error");
        setTimeout(() => {
          main.classList.remove("error");
        }, 1000);
      }
      serch.value = "";
    });
};

const initApp = () => {
  serch.value = "Karachi";
  searchWeather();
};
initApp();
