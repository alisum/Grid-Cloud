document.addEventListener("DOMContentLoaded", function (event) {
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080", true);

xhr.onload = function() {
	var responseText = this.responseText;
	var div = document.getElementById("results");
	div.innerText = responseText;
}

xhr.onerror = function() {
	alert.log("Error occured");

}

xhr.send();
})