var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function strikeThrough() {
	{
		this.classList.toggle("done");
	}
}

function removeParent (evt) {
	evt.target.parentNode.remove();
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", strikeThrough);
	var deletebtn = document.createElement("button");
	deletebtn.innerHTML = "delete";
	li.appendChild(deletebtn);
	deletebtn.onclick = removeParent;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



for (var i = 0; i < listItem.length; i++) {
	listItem[i].addEventListener("click", strikeThrough);
	var deletebtn = document.createElement("button");
	deletebtn.innerHTML = "delete";
	listItem[i].appendChild(deletebtn);
	deletebtn.onclick = removeParent;

}


