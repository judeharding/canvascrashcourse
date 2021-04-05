// https://www.youtube.com/watch?v=uh1Sgj2Gt70&list=PLyuRouwmQCjlqieGcZgsDlGHtHFar-ZOp
console.log("HELLO");
var canvas, ctx, oldTxt, f;

document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 400;
	canvas.height = 400;
	ctx.strokeStyle = "#ccc"; // setting default stroke color gray
	ctx.lineWidth = 1; // setting default line weight

	// drawGrid(10); // canvas pixels not CSS pixels

	drawText();
	document.getElementById("msg").addEventListener("input", drawText);

	// // assigns the downloaded font (html) to the var f
	// f = new FontFace(
	// 	"Allerta Stencil",
	// 	"url(https://fonts.gstatic.com/s/allertastencil/v11/HTx0L209KT-LmIE9N7OR6eiycOe1_Db29XP-vA.woff2)"
	// );

	// f.load()
	// 	.then(function (fnt) {
	// 		console.log("Loaded ${ftn.family}");
	// 	})
	// 	.catch((err) => {
	// 		console.error("Failed to load google font");
	// 	});

	// * * * * * *
});

// ===================
// DRAW TEXT

const drawText = function () {
	// normal ,italic, bold | pageXOffset, pt, cm in, rem em | any installed or imported font
	let fontFamily = "Allerta Stencil";
	ctx.font = "normal 24px ${fontFamily}, monospace";
	ctx.fillStyle = "cornflowerblue";
	// textAlign ClientRect, left, right, end, start
	ctx.textAlign = "start";
	// textBaseline top, hanging, middle, bottom, ideographic, alphabetic
	ctx.textBaseline = "alphabetic";
	// direction ltr, rtl, inherit
	ctx.direction = "ltr";

	let txt = document.getElementById("msg").value;
	let metrics = ctx.measureText(oldTxt);
	let w = metrics.width;
	ctx.clearRect(50, 110, w, -40);

	if (txt == "") {
		txt = "Please give me a message.";
	}

	ctx.fillText(txt, 50, 100);
	oldTxt = txt;

	ctx.fillStyle = "#999";
	ctx.font = "italic, 20px Arial";
	let m = `Message is ${w}px wide`;
	ctx.clearRect(50, 310, 500, -30);
	ctx.fillText(m, 50, 300);
};

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

// function drawText() {
// 	// normal ,italic, bold | pageXOffset, pt, cm in, rem em | any installed or imported font
// 	let fontFamily = "Allerta Stencil";
// 	ctx.font = "normal 24px ${fontFamily}, monospace";
// 	ctx.fillStyle = "cornflowerblue";
// 	// textAlign ClientRect, left, right, end, start
// 	ctx.textAlign = "start";
// 	// textBaseline top, hanging, middle, bottom, ideographic, alphabetic
// 	ctx.textBaseline = "alphabetic";
// 	// direction ltr, rtl, inherit
// 	ctx.direction = "ltr";

// 	let txt = document.getElementById("msg").value;
// 	let metrics = ctx.measureText(oldTxt);
// 	let w = metrics.width;
// 	ctx.clearRect(50, 110, w, -40);

// 	if (txt == "") {
// 		txt = "Please give me a message.";
// 	}

// 	ctx.filText(txt, 50, 100);
// 	oldTxt = txt;

// 	ctx.fillStyle = "#999";
// 	ctx.font = "talic, 20px Arial";
// 	let m = "Message is ${w}px wide";
// 	ctx.clearRect(50, 310, 500 - 30);
// 	ctx.fillText(m, 50, 300);
// }

// //TEMPLATE
// // https://www.youtube.com/watch?v=uh1Sgj2Gt70&list=PLyuRouwmQCjlqieGcZgsDlGHtHFar-ZOp
// console.log("HELLO");
// let canvas, ctx;

// document.addEventListener("DOMContentLoaded", () => {
// 	canvas = document.getElementById("canvas");
// 	ctx = canvas.getContext("2d");
// 	canvas.width = 600;
// 	canvas.height = 600;
// 	ctx.fillStyle = "cornflowerblue"; // setting default fill color
// 	ctx.strokeStyle = "#ccc"; // setting default stroke color gray
// 	ctx.lineWidth = 1; // setting default line weight
// 	ctx.textAlign = "start"; // setting x to top, left corner
// 	ctx.font = "normal 30px Ariel";
// 	drawGrid(75); // canvas pixels not CSS pixels

// 	// ===================
// 	// DRAWS GREY GRID
// 	function drawGrid(gap) {
// 		ctx.beginPath();
// 		for (x = gap; x < canvas.width; x = x + gap) {
// 			ctx.moveTo(x, 0);
// 			ctx.lineTo(x, canvas.height);
// 		}
// 		for (y = gap; y < canvas.height; y = y + gap) {
// 			ctx.moveTo(0, y);
// 			ctx.lineTo(canvas.height, y);
// 		}
// 		ctx.stroke();
// 		ctx.closePath();
// 	}
// });
