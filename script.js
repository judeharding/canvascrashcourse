// https://www.youtube.com/c/SteveGriffith-Prof3ssorSt3v3/search?query=canvas
console.log("HELLO");
let canvas, ctx;

document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 800;
	ctx.fillStyle = "cornflowerblue"; // setting default fill color
	ctx.strokeStyle = "#ccc"; // setting default stroke color gray
	ctx.lineWidth = 3; // setting default line weight
	ctx.textAlign = "start"; // setting x to top, left corner
	ctx.font = "normal 30px Ariel";
	drawGrid(100); // canvas pixels not CSS pixels
	// showZeros();
	// plainRect();
	// fatGreenLine();
	// rotateBrownRect();
	drawEllipse();

	var x = 0; // setting the 0x
	var y = 0; // setting the 0y

	// ========================
	// DRAW ELLIPSE
	function drawEllipse() {
		ctx.beginPath(); // disconnects 2 different objects
		// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlock);
		ctx.ellipse(200, 200, 100, 50, 0, 0, Math.PI * 1.5, false);

		// ellipses can be circles if everything is equal
		ctx.ellipse(200, 200, 100, 100, 0, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		///////////

		ctx.beginPath();
		ctx.fillStyle = "yellow"; // resetting fill color
		ctx.strokeStyle = "green"; // resetting stroke color
		ctx.lineWidth = 1; // resetting line weight
		ctx.arc(400, 200, 50, 0, Math.PI * 1.5, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}

	// ========================
	// SHOWS ZERO X AND Y
	function showZeros() {
		ctx.beginPath();
		ctx.fillStyle = "cornflowerblue";
		ctx.arc(0, 0, 5, 0, Math.PI * 2); // drawing circle around  x/y - upper left corner
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}

	// ========================
	// DRAWS PLAIN RECTANGLES
	function plainRect() {
		//DEFINE A PLAIN RECTANGLE
		ctx.rect(300, 100, 100, 50);

		// DEFINE STROKE COLOR AND WEIGHT
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;

		// DEFINE A FILL STYLE OVERWRITING THE ONE ABOVE
		ctx.fillStyle = "yellow";

		// CALL THE FILL AND STROKE TO PERFORM THE ACTION
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		// ALTERNATE WAY TO CREATE A RECTANGLE
		ctx.fillRect(400, 300, 100, 50); // uses the last known fillStyle
		ctx.strokeRect(400, 200, 100, 50); // uses the last known strokeStyle

		// HIDE PART OF A RECTANGLE
		ctx.clearRect(350, 100, 100, 25);
	}

	// ===============
	// ROTATE BROWN RECTANGLE
	function rotateBrownRect() {
		ctx.rotate(Math.PI / 4); // 3.14 radians 90 degree rotates AROUND the NEW above
		ctx.fillStyle = "brown";
		ctx.fillRect(200, 100, 250, 25);
		ctx.closePath();
	}

	// ========================
	// FAT GREEN LINE
	function fatGreenLine() {
		ctx.beginPath();
		ctx.lineWidth = 35;
		ctx.lineCap = "round";
		ctx.moveTo(250, 350);
		ctx.lineTo(450, 600);
		ctx.strokeStyle = "green";
		ctx.stroke();
		ctx.closePath();
	}

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

// // =====================
// var x = 100; // setting the 0x to 100px
// 	var y = 100; // setting the 0y to 100px
// 	ctx.save(); // creates a SAVE point

// 	// TRANSLATE METHOD = resetting x and y points
// 	ctx.beginPath();
// 	ctx.translate(200, 200); // setting the 0x and 0y to 200px from x/y 100
// 	ctx.fillText("translate", x, y); // adds 100 to the already 200 x/y
// 	ctx.arc(0, 0, 5, 0, Math.PI * 2); // drawing circle around new x/y
// 	ctx.fillText("Translate1", 0, 0); // original x/y
// 	ctx.fill();
// 	ctx.closePath();

// 	// ROTATE METHOD
// 	ctx.save();
// 	ctx.beginPath();
// 	ctx.rotate(Math.PI); // 3.14 radians 180 degree rotates AROUND the NEW 0/0 point of 200/200
// 	ctx.rotate(Math.PI / 2); // 3.14 radians 90 degree rotates AROUND the NEW above
// 	ctx.fillText("rotate", x, y); // the translate 200 200 above still applies
// 	ctx.rotate(Math.PI); // shows NO rotation b/c following fillText line
// 	ctx.fill();
// 	ctx.closePath();

// 	// SCALE
// 	ctx.restore(); // RE ESTABLISHES the x/y to 0, 0.
// 	ctx.beginPath();
// 	ctx.scale(2, 2); //200% in both x and y
// 	ctx.fillText("scale", 0, 30);
// 	ctx.fill();
// 	ctx.closePath();

// 	// ROTATE RECTANGLE
// 	ctx.restore(); // RE ESTABLISHES the x/y to 0, 0.
// 	ctx.beginPath();
// 	ctx.rotate(Math.PI / 4); // 3.14 radians 90 degree rotates AROUND the NEW above
// 	ctx.fillStyle = "brown";
// 	ctx.fillRect(200, 100, 250, 25);
// 	ctx.closePath();

// 	// FAT LINE
// 	ctx.restore(); // RE ESTABLISHES the x/y to 0, 0.
// 	ctx.beginPath();
// 	ctx.lineWidth = 35;
// 	ctx.lineCap = "round";
// 	ctx.moveTo(250, 50);
// 	ctx.lineTo(450, 200);
// 	ctx.strokeStyle = "green";
// 	ctx.stroke();
// 	ctx.closePath();

// 	// ==================

// 	ctx.beginPath();
// 	ctx.moveTo(100, 100);
// 	ctx.rotate((20 * Math.PI) / 180);
// 	ctx.fillRect(100, 100, 100, 50);
// 	ctx.closePath();

// 	// Point of transform origin
// 	ctx.arc(0, 0, 5, 0, 2 * Math.PI);
// 	ctx.fillStyle = "blue";
// 	ctx.fill();

// 	// Non-rotated rectangle
// 	ctx.fillStyle = "gray";
// 	ctx.fillRect(200, 200, 80, 20);

// 	// Rotated rectangle
// 	ctx.rotate((45 * Math.PI) / 180);
// 	ctx.fillStyle = "red";
// 	ctx.fillRect(100, 0, 80, 20);

// 	// Reset transformation matrix to the identity matrix
// 	ctx.setTransform(1, 0, 0, 1, 0, 0);

// 	// Non-rotated rectangle
// 	ctx.fillStyle = "gray";
// 	ctx.fillRect(80, 60, 140, 30);

// 	// Matrix transformation
// 	ctx.translate(150, 75);
// 	ctx.rotate(Math.PI / 2);
// 	ctx.translate(-150, -75);

// 	// Rotated rectangle
// 	ctx.fillStyle = "red";
// 	ctx.fillRect(80, 60, 140, 30);

// 	// ===================
