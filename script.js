// // https://stackoverflow.com/questions/54790325/dimensions-calculated-w-javascript-to-draw-div-boxes-is-off
function updateForm(width, height, box) {
	"use strict";
	// STARTING POINT ON CANVAS in pixels
	var x = 175;
	var y = 175;

	// SETTING SCALE
	var oneFt = 60;
	var oneIn = oneFt / 12;

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

	//Draw rectangle x and y = starting point.
	// context.rect(x, y, height * 50, width * 50);
	context.rect(x, y, height, width);
	context.fillStyle = "blue";
	context.fill();
	switch (box) {
		case "eight-seven":
			canvas.style.zIndex = 3000;
			context.rect(x, y, 200, 150);
			context.fillStyle = "blue";
			context.fill();
			break;
		case "nine-seven":
			canvas.style.zIndex = 2000;
			context.rect(x, y, 250, 200);
			context.fillStyle = "red";
			context.fill();
			break;
		case "sixteen-seven":
			canvas.style.zIndex = 1000;
			context.rect(x, y, 300, 250);
			context.fillStyle = "green";
			context.fill();
			break;
		case "custom":
			canvas.style.zIndex = 500;
			context.rect(x, y, 60, 1);
			context.fillStyle = "orange";
			context.fill();
			break;
		case "board":
			canvas.style.zIndex = 250;
			context.rect(x + 5, y + 5, 1, 15);
			context.fillStyle = "purple";
			context.fill();
			break;

		case "diag":
			// canvas.style.zIndex = 125;
			// context.rect(x, y, 300, 250);
			// context.fillStyle = "blue";
			// context.fill();
			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(10, 10);
			ctx.lineTo(100, 100);
			ctx.strokeStyle = "#FF0000";
			ctx.stroke();
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
