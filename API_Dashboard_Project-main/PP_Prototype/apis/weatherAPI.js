
fetch("https://dark-sky.p.rapidapi.com/53.783927,-2.892869?lang=en&units=auto", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0255f7e862mshce9c8c06104be3bp1c98dcjsnbad456a48da3",
		"x-rapidapi-host": "dark-sky.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(x => weather = x.currently)
.then(data => document.getElementById("weathertype").innerHTML ="Current weather in Preston is "+ data.summary)
.then(data => document.getElementById("timezone").innerHTML ="The temperature is "+ weather.temperature+"°C")
.then(data => document.getElementById("wind").innerHTML ="The wind speed is "+ weather.windSpeed+"mph")



function turnoffweather() {
  var x = document.getElementById("drag-1");
	var y = document.getElementById("weatherToggle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

	if (x.style.display === "none") {
		y.style.color = "red";
	} else {
		y.style.color = "#66ff69";
	}
}
