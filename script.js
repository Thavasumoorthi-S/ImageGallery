function opendisplay(img,alt) {
	let modal = document.getElementById("myModal");
	let modalImg = document.getElementById("img01");
	document.getElementById('bottom').innerHTML=alt;
	modal.style.display = "block";
	modalImg.src = img;
}

function closedisplay() {
	let modal = document.getElementById("myModal");
	modal.style.display = "none";
}



