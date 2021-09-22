console.log("click");
const app_key = "e8f2ccea0350442dc80663c8d667bf37";
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}`;
  const fetch('api').than(response=>response.json()).than(data=>console.log(data))
};
