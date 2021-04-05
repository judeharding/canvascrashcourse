// // https://www.youtube.com/watch?v=uh1Sgj2Gt70&list=PLyuRouwmQCjlqieGcZgsDlGHtHFar-ZOp
console.log("HELLO");
let canvas, ctx;

let midx, midy, midx1, midy1, midx2, midy2;

document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = 800;
	ctx.fillStyle = "cornflowerblue"; // setting default fill color
	ctx.strokeStyle = "#ccc"; // setting default stroke color gray
	ctx.lineWidth = 1; // setting default line weight
	ctx.textAlign = "start"; // setting x to top, left corner
	ctx.font = "normal 30px Ariel";
	drawGrid(75); // canvas pixels not CSS pixels

	// ===================
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
