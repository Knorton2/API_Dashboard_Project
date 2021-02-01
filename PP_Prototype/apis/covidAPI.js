fetch("https://covid-19-v1.p.rapidapi.com/v1/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0255f7e862mshce9c8c06104be3bp1c98dcjsnbad456a48da3",
		"x-rapidapi-host": "covid-19-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(x => covid = x.data)
.then(data => document.getElementById("covidconfirmed").innerHTML ="Global covid cases today are "+ covid.cases)
.then(data => document.getElementById("coviddeaths").innerHTML ="Global deaths today are "+ covid.todayDeaths)
.then(data => document.getElementById("covidrecovered").innerHTML ="Global recovered cases today are "+ covid.todayRecovered)

function turnoffcovid() {
  var x = document.getElementById("drag-2");
	var y = document.getElementById("covidToggle");
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

function turnofftwitter() {
  var x = document.getElementById("drag-8");
	var y = document.getElementById("twitterToggle");
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


function turnofftodo() {
  var x = document.getElementById("drag-7");
	var y = document.getElementById("ToDoToggle");
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

function turnoffcalendar() {
  var x = document.getElementById("drag-6");
	var y = document.getElementById("calendarToggle");
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

//API LINK https://rapidapi.com/spamakashrajtech/api/corona-virus-world-and-india-data/endpoints
