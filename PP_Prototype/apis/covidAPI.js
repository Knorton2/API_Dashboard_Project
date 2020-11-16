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



//API LINK https://rapidapi.com/spamakashrajtech/api/corona-virus-world-and-india-data/endpoints
