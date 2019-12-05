var entry = document.getElementById("input").value;
var form = document.getElementById("form");
var encryptButton = document.getElementById("encrypt");
var decryptButton = document.getElementById("decrypt");
var displaySpace = document.getElementById("displaySpace");

(() => {
	input.focus();
})();

var display = input => {
	displaySpace.innerText = input;
};

encryptButton.addEventListener("click", () => {
	event.preventDefault();
	var entry = input.value;
	if (entry.length === 0) {
		entry = displaySpace.innerText;
	}
	let [res, track, result] = [""];
	for (const each in entry) {
		let enc = entry[each].charCodeAt(0);
		if (enc == 46 || enc == 44 || enc == 39 || enc == 32 || enc == 33 || enc == 34 || enc == 39 || enc == 63) {
	  		track = String.fromCharCode(enc);
		} else if (enc - 5 < 65 || (enc - 5 < 97 && enc - 5 > 90)) {
	  		track = String.fromCharCode(90 - (4 - (enc - 65)));
		} else {
	  		enc -= 5;
	  		track = String.fromCharCode(enc);
		}
		res += track;
		result = res.replace(/5/g, " ");
	}
	display(result);
	input.value = "";
});

decryptButton.addEventListener("click", () => {
	event.preventDefault();
	var entry = displaySpace.innerText;
	let [res, track, result] = [""];
	for (const each in entry) {
		let enc = entry[each].charCodeAt(0);
		if (enc == 46 || enc == 44 || enc == 39 || enc == 32 || enc == 33 || enc == 34 || enc == 39 || enc == 63) {
	  		track = String.fromCharCode(enc);
		} else if ((enc + 5 > 90 && enc + 5 < 97) || enc + 5 > 122) {
	  		track = String.fromCharCode(65 + (4 + (enc - 90)));
		} else {
	  		enc += 5;
	  		track = String.fromCharCode(enc);
		}
		res += track;
		result = res.replace(/5/g, " ");
	}
	display(result);
});