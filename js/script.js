fetch('http://api.openweathermap.org/data/2.5/forecast?id=703448&appid=9a5e9f5db2d9bbccd0f80c94eb3f48fb')
.then(function(resp) { return resp.json()})
.then(function(data) {
    console.log(data);
    document.querySelector('.wearter-city').innerHTML = data.city.name;
    document.querySelector('.wearter-country').innerHTML = data.city.country;
    document.querySelector('.summary').innerHTML = Math.round((data.list[0].main.temp-273))+'&deg';
    document.querySelector('.text-deg2').innerHTML = Math.round((data.list[0].main.feels_like))+'&deg';
    document.querySelector('.type-wearter').innerHTML = data.list[0].weather[0].description;
    document.querySelector('.text-m').innerHTML = data.list[0].wind.speed + 'm/s';
    document.querySelector('.text-deg').innerHTML = data.list[0].wind.deg + 'deg';
    ////////LIST2/////////////////////////////////////////////////////////////////
    document.querySelector('.weekday').innerHTML = data.list[2].dt_txt;
    document.querySelector('.t').innerHTML = Math.round((data.list[2].main.temp-273)) + '&deg';
    document.querySelector('.type').innerHTML = data.list[2].weather[0].description;
    //////////// LIST3/////////////////////////////////////////////////////////
    document.querySelector('.weekday2').innerHTML = data.list[15].dt_txt;
    document.querySelector('.t2').innerHTML = Math.round((data.list[15].main.temp-273)) + '&deg';
    document.querySelector('.type2').innerHTML = data.list[15].weather[0].description;
   
   
})
.catch(function() {

});

const today = new Date();
document.querySelector('.wearter-day').innerHTML = today;