



function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

var weatherD = getCookie("weatherD");

if (weatherD == "visible"){
  document.getElementById("drag-1").style.display = "block";
} else if (weatherD == "hidden") {
  document.getElementById("drag-1").style.display = "none";
}



var loc = getCookie("location");


if (loc == "France") {
  var long = "46.2276";
	var lang = "2.2137";
} else if (loc == "London") {
	var long = "51.3917662";
	var lang = "-0.2907196";
} else if (loc == "New_York") {
	var long = "40.7128";
	var lang = "74.0060";
} else if (loc == "Spain") {
	var long = "40.4637";
	var lang = "3.7492";
}

fetch("https://dark-sky.p.rapidapi.com/"+long+","+lang+"?lang=en&units=auto", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0255f7e862mshce9c8c06104be3bp1c98dcjsnbad456a48da3",
		"x-rapidapi-host": "dark-sky.p.rapidapi.com"
	}
})



.then(response => response.json())
.then(x => weather = x.currently)
.then(data => document.getElementById("weathertype").innerHTML ="Current weather in "+loc+" is "+ data.summary)
.then(data => document.getElementById("timezone").innerHTML ="The temperature is "+ weather.temperature+"°C")
.then(data => document.getElementById("wind").innerHTML ="The wind speed is "+ weather.windSpeed+"mph")



function turnoffweather() {
  var weatherD;
  var x = document.getElementById("drag-1");
	var y = document.getElementById("weatherToggle");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.cookie = "weatherD=visible; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
  } else {
    x.style.display = "none";
    document.cookie = "weatherD=hidden; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
  }

	if (x.style.display === "none") {
		y.style.color = "red";
	} else {
		y.style.color = "#66ff69";
	}
}

function saveweather() {
	var loc = document.getElementById("LocationSettings").value;

	document.cookie = "location="+loc+"; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
	console.log(loc);
	window.location.replace(window.location.pathname + window.location.search + window.location.hash);
}
