let weather = {
    apiKey:"43fa22da15f41d9abf3eeda839fac709",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apiKey
         )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        var{name} = data;
        var{icon,description} = data.weather[0];
        var{temp,humidity} = data.main;
        var{speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector("#i1").innerText =  temp + "°C";
        document.querySelector("#i2").innerText = "Humidity: " + humidity + "%"; 
        document.querySelector("#i3").innerText = "Wind Speed: " + speed + " Km/h"; 
        document.body.style.backgroundImage = "url('https://source.unsplash.com/user/erondu/1600x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Haryana");