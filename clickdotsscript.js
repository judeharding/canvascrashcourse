// https://www.youtube.com/watch?v=Yvz_axxWG4Y 16 min
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // or webgl instead of 2d

// helps establish the canvas height and width to give you access
// to match browser window but this only happens on initial load
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// helps with mobile and resizing window
window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// ctx.fillStyle = "White";
	// ctx.fillRect(10, 10, 150, 50);
});

// logging the object will allow you to see all of the settings you can modify
// console.log(ctx);
// ctx.fillStyle = "white";

// in the dunderproto, you can see drawing methods like arc
// ctx.arc();

// because this is outside of the resize window listener, this
// disappears when the window is resized.
// ctx.fillStyle 10, 10, 150, 50); // x, y, width, height

const mouse = {
	x: null,
	y: null,
};

canvas.addEventListener("click", function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
	drawCircle();
	console.log(event); // to see your x and y coordinates of a click
});

function drawCircle() {
	ctx.fillStyle = "red";
	// ctx.strokeStyle = "yellow";
	// ctx.lineWidth = 15;
	ctx.beginPath();
	// ctx.arc(100, 100, 50, 0, Math.PI * 2); // fixed location
	ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
	// ctx.stroke();
	ctx.fill();
}
