// https://www.youtube.com/watch?v=5vxygxshTQ4

console.log("HELLO");
let canvas, ctx;

document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 800;
	ctx.fillStyle = "cornflowerblue";
	ctx.strokeStyle = "#ccc"; // gray
	ctx.lineWidth = 2;
	ctx.textAlign = "start";
	ctx.font = "normal 30px Ariel";
	drawGrid(100); // canvas pixels not CSS pixels

	var x = 100; // setting the 0x to 100px
	var y = 100; // setting the 0y to 100px

	// TRANSLATE METHOD = resetting x and y points
	ctx.beginPath();
	ctx.translate(200, 200); // setting the 0x and 0y to 200px from x/y 100
	ctx.fillText("translate", x, y);
	ctx.fillText("Translate1", 0, 0);
	ctx.fill();
	ctx.closePath();

	// ROTATE METHOD
	ctx.beginPath();
	ctx.rotate(Math.PI); // 3.14 radians 180 degree rotates AROUND the NEW 0/0 point of 200/200
	ctx.fillText("rotate", x + 20, y + 20); // the translate 200 200 above still applies
	// ctx.rotate(Math.PI); // shows NO rotation b/c following fillText line
	ctx.fill();
	ctx.closePath();

	// DRAWS GREY GRID
	function drawGrid(gap) {
		ctx.beginPath();
		for (x = gap; x < canvas.width; x = x + gap) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, canvas.height);
		}
		for (y = gap; y < canvas.height; y = y + gap) {
			ctx.moveTo(0, y);
			ctx.lineTo(canvas.height, y);
		}
		ctx.stroke();
		ctx.closePath();
	}
});

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.rotate((20 * Math.PI) / 180);
// ctx.fillRect(100, 100, 100, 50);
// ctx.closePath();

// // Point of transform origin
// ctx.arc(0, 0, 5, 0, 2 * Math.PI);
// ctx.fillStyle = "blue";
// ctx.fill();

// // Non-rotated rectangle
// ctx.fillStyle = "gray";
// ctx.fillRect(200, 200, 80, 20);

// // Rotated rectangle
// ctx.rotate((45 * Math.PI) / 180);
// ctx.fillStyle = "red";
// ctx.fillRect(100, 0, 80, 20);

// // Reset transformation matrix to the identity matrix
// ctx.setTransform(1, 0, 0, 1, 0, 0);

// // Non-rotated rectangle
// ctx.fillStyle = "gray";
// ctx.fillRect(80, 60, 140, 30);

// // Matrix transformation
// ctx.translate(150, 75);
// ctx.rotate(Math.PI / 2);
// ctx.translate(-150, -75);

// // Rotated rectangle
// ctx.fillStyle = "red";
// ctx.fillRect(80, 60, 140, 30);
