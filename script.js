// const button = document.querySelector('#button');
// const input = document.getElementById('#input');
// const cityName = input.value;
// const city = document.querySelector('#city');
// const temp = document.querySelector('#temp');
// const desc = document.querySelector('#desc');
// const apiKey = '42b3774f1eef491b1c4f65e00376da9b';
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
// console.log(url);

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
    // city.style.color = 'red';
    city.style.fontSize = '50px';
    city.innerText = temp.name;
    const dayTemp = document.getElementById('temp');
    dayTemp.innerText = Math.round(temp.main.temp - 273);
    const desc = document.getElementById('desc');
    desc.innerText = temp.weather[0].main;
    // console.log(temp);
    // console.log(temp.name);
    // console.log(temp.weather[0].main);
    // console.log(temp.main.temp - 273);
}

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));


// https://www.youtube.com/watch?v=SXsaB9TUfkk&t=22s
// https://www.youtube.com/watch?v=GXrDEA3SIOQ