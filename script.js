function getWeather() {
    const inputField = document.getElementById('inputField');
    const cityName = inputField.value;
    const apiKey = '42b3774f1eef491b1c4f65e00376da9b';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    inputField.value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherForcust(data));
    console.log(url);
}

function displayWeatherForcust(temp) {
    const city = document.getElementById('city');
    city.style.fontSize = '50px';
    city.innerText = temp.name;
    const dayTemp = document.getElementById('temp');
    dayTemp.innerText = Math.round(temp.main.temp - 273);
    const desc = document.getElementById('desc');
    desc.innerText = temp.weather[0].main;
}