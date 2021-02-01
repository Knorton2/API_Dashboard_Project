

function changeimage() {

  var r = Math.floor(Math.random() * 100);

  document.getElementById("picture").src="https://picsum.photos/id/"+r+"/300"
}

function turnoffpic() {
  var x = document.getElementById("drag-4");
	var y = document.getElementById("picToggle");
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
