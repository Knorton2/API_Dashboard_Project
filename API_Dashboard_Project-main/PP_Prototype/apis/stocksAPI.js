fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw%2Creligious%2Cpolitical%2Cracist%2Csexist&idRange=0-150&type=twopart", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0255f7e862mshce9c8c06104be3bp1c98dcjsnbad456a48da3",
		"x-rapidapi-host": "jokeapi-v2.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(x => joke = x)
.then(data => document.getElementById("setup").innerHTML =joke.setup)
.then(data => document.getElementById("punchline").innerHTML =joke.delivery)


function turnoffjoke() {
  var x = document.getElementById("drag-3");
	var y = document.getElementById("jokeToggle");
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
