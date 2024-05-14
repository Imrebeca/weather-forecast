

const key = "bf29b0812cdb1cc5ad363bd8d170caa5"


function showData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


}
async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

       
    showData(data)

    
}

function clickButton() {
    const city = document.querySelector(".input-city").value


    searchCity(city)
}
