const api_key = "e8f2ccea0350442dc80663c8d667bf37";
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  document.getElementById("city-name").value = "";

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(api)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  setInnerText("name", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("weather", temperature.weather[0].main);
  //set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
