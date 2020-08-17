var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var o3aqi = document.querySelector('.o3aqi')
var pm25aqi = document.querySelector('.pm25aqi')

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=003b50729c4b0fe02c63eed566dcb7da')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp']
            var descValue = data['weather'][0]['description']

            temp.innerHTML = "Temperature: ";
            desc.innerHTML = " Description: ";
            temp.innerHTML += Math.round(1.8 * (tempValue - 273) + 32) + ' F ';
            desc.innerHTML += descValue;
        })
       
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl+ 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=' + inputValue.value + '&distance=25&API_KEY=29ACB9C4-EEE9-46B6-B4DD-8C25C0D21B2C')
        .then(response => response.json())
        .then(data => {
            o3aqi.innerHTML= " O3 AQI: ";
            pm25aqi.innerHTML= "PM2.5 AQI: ";
            var o3aqiValue = data[0]["AQI"];
            o3aqi.innerHTML += o3aqiValue;
            var pm25Value = data[1]["AQI"];
            pm25aqi.innerHTML += pm25Value


        })
        
        .catch(err => alert("Wrong City Name or Zip Code Only to See AQI"))
})
