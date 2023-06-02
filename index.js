const apiKey = "4878ff33cbe54902b1862526230206";
const apiUrl = "https://api.weatherapi.com/v1/current.json";
// const cityName = "Amravati"
const searchBox = document.querySelector(".search input")
const btn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(cityName){
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${cityName}`)

    // if(response.status){
    //     document.querySelector("error").style.display = "block"
    //     document.querySelector("weather").style.display = "none"
    // }else{

    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + `°c`;
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    if(data.current.condition.text == "Sunny" || "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.current.condition.text == "Mist" || "Partly cloudy" ){
        weatherIcon.src = "images/drizzle.png"
        // weatherIcon.src = "https://cdn.weatherapi.com/weather/64x64/day/116.png"
    }else if(data.current.condition.text == "Overcast" || "Cloud"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.current.condition.text == "Rain"){
        weatherIcon.src = "images/rain.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
}
// }

btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})


