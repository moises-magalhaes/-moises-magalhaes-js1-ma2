//question 1

const button1 = document.querySelector("#bg");

button1.onclick = function () {
	document.body.style.background = "green";
};

//question 2

const button2 = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

button2.onclick = function () {
	togglee.classList.toggle("extra");
};

//question 3

const dropdown = document.querySelector("select");
const paragraphs = document.querySelector(".paragraphs-container");
const content = document.querySelector(".content");
dropdown.onchange = function () {
	console.log(event.target.value);
	const selectedValue = this.value;

	paragraphs.innerHTML = "";
	for (let i = 1; i <= selectedValue; i++) {
		paragraphs.innerHTML += `<div class="content"></div>`;
	}
};

//question 4

const text = document.querySelector(".input");
const characterCount = document.querySelector(".char-count");

text.onkeyup = function () {
	console.log(event.target.value.length);

	const len = event.target.value.length;

	characterCount.innerHTML = len;
};

//question 5

const body = document.querySelector("body");

function handleScroll() {
	console.log(window.scrollY);
	const highlight = window.scrollY;

	if (highlight > 35) {
		document.body.classList.add("highlight");
		body.classList.add("highlight");
	} else {
		document.body.classList.remove("highlight");
		body.classList.remove("highlight");
	}
}

window.onscroll = handleScroll;
