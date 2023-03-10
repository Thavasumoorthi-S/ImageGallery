function opendisplay(img,alt) {
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	document.getElementById('bottom').innerHTML=alt;
	modal.style.display = "block";
	modalImg.src = img;
}

function closedisplay() {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}



