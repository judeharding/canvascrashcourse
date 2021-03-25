function updateForm(width, height, box) {
	"use strict";
	var x = 50;
	var y = 50;
	var canvas = document.createElement("canvas"); //Create a canvas
	//Set canvas width/height
	canvas.style.width = "99%";
	canvas.style.height = "99%";
	// Set canvas drawing area width/height
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//Position canvas
	canvas.style.position = "absolute";
	canvas.style.left = 0;
	canvas.style.top = 350;
	canvas.style.pointerEvents = "none";
	document.body.appendChild(canvas); //Append canvas to body element
	var context = canvas.getContext("2d");
	//Draw rectangle
	context.rect(x, y, height * 50, width * 50);
	context.fillStyle = "blue";
	context.fill();
	switch (box) {
		case "three-two":
			canvas.style.zIndex = 3000;
			context.rect(x, y, 150, 200);
			context.fillStyle = "green";
			context.fill();
			break;
		case "four-six":
			canvas.style.zIndex = 2000;
			context.rect(x, y, 200, 300);
			context.fillStyle = "red";
			context.fill();
			break;
		case "five-four":
			canvas.style.zIndex = 1000;
			context.rect(x, y, 250, 200);
			context.fillStyle = "orange";
			context.fill();
			break;
		default:
			alert("The value supplied is out of range!");
			break;
	}
}

function draw() {
	var width = document.getElementById("wid").value;
	var height = document.getElementById("hgt").value;
	var box = document.getElementById("boxSize").value;
	updateForm(width, height, box);
}
