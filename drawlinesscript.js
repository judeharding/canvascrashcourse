// // https://www.youtube.com/watch?v=uh1Sgj2Gt70&list=PLyuRouwmQCjlqieGcZgsDlGHtHFar-ZOp
console.log("HELLO");

let canvas, ctx;
let midx, midy, midx1, midy1, midx2, midy2;

document.addEventListener("DOMContentLoaded", (ev) => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 400;

	canvas.addEventListener("mousedown", start);
	canvas.addEventListener("mouseup", end);
	// canvas.addEventListener("mouseup", endQC);
	// canvas.addEventListener("mouseup", endBC);

	midx = canvas.width / 2;
	midy = canvas.height / 2;

	midx1 = canvas.width / 4;
	midy1 = canvas.height / 4;
	midx2 = canvas.width - midx1;
	midy2 = canvas.height - midy1;

	// points on canvas to use on quadratic and bezier curves
	// the further you are away from the dot, the greater the curve
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(midx, midy, 5, 0, 2 * Math.PI, false);
	ctx.strokeStyle = "red"; //QUADRATIC
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(midx1, midy1, 5, 0, 2 * Math.PI, false);
	ctx.strokeStyle = "orange"; //BEZIER
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(midx2, midy2, 5, 0, 2 * Math.PI, false);
	ctx.strokeStyle = "skyblue"; // BEZIER
	ctx.stroke();

	ctx.lineCap = "round"; //butt, round
	ctx.lineWidth = 10;
});

//DRAWS LINES - turn on mousedown/end
//
const start = function (ev) {
	ctx.beginPath();
	ctx.strokeStyle = "#bada55";
	console.log("from ", ev.offsetX, ev.offsetY);
	ctx.moveTo(ev.offsetX, ev.offsetY);
};
const end = function (ev) {
	//using lineTo(x, y)
	console.log("to ", ev.offsetX, ev.offsetY);
	ctx.lineTo(ev.offsetX, ev.offsetY);
	ctx.stroke();
};

//Quadratic curve - uses 1 point for curve
const endQC = function (ev) {
	//using quadraticCurveTo(midx, midy, endx, endy)
	console.log("to", ev.offsetX, ev.offsetY);
	let endx = ev.offsetX;
	let endy = ev.offsetY;
	ctx.quadraticCurveTo(midx, midy, endx, endy);
	ctx.stroke();
};

const endBC = function (ev) {
	//using bezierCurveTo(midx1, midy1, midx2, midy2, endx, endy)
	console.log("to", ev.offsetX, ev.offsetY);
	let endx = ev.offsetX;
	let endy = ev.offsetY;
	ctx.bezierCurveTo(midx1, midy1, midx2, midy2, endx, endy);
	ctx.stroke();
};
