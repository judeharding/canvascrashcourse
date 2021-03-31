var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");

// STARTING POINT ON CANVAS in pixels
var x = 50;
var y = 50;

// first 2 numbers are the starting x and y ADDING IN PAIRS OF 2
var polygon1 = [x, y, 100, 50, 50, 100];
ctx1.beginPath();
ctx1.moveTo(polygon1[0], polygon1[1]);

// loop through the array and draw the polygon using the lineTo function
// (i=2 b/c we used it as x & y)
// +=2 increase i x 2 b/c those are x and y coordinates for the next point
for (item = 2; item < polygon1.length - 1; item += 2) {
	// use the lineTo funct to draw
	ctx1.lineTo(polygon1[item], polygon1[item + 1]);
}
ctx1.closePath();
ctx1.stroke();
ctx1.fill();

// --------------------
// STARTING POINT ON CANVAS2 in pixels
// var a = 50;
// var b = 50;

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");

var polygon2 = [50, 50, 100, 50, 110, 75, 130, 90, 100, 120, 90, 140, 80, 120];
ctx2.beginPath();

// first 2 numbers are the starting x and y
ctx2.moveTo(polygon2[0], polygon2[1]);

// loop through the array and draw the polygon using the lineTo function
// (i=2 b/c we used it as x & y)
// +=2 increase i x 2 b/c those are x and y coordinates for the next point
for (item = 2; item < polygon2.length - 1; item += 2) {
	// use the lineTo funct to draw
	ctx2.lineTo(polygon2[item], polygon2[item + 1]);
}
ctx2.closePath();
ctx2.stroke();
ctx2.fill();

// --------------------
// STARTING POINT ON CANVAS3 in pixels
// var a = 50;
// var b = 50;

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");

ctx3.beginPath();

// pont at 11 am
ctx3.beginPath();
ctx3.moveTo(50, 50);
ctx3.lineTo(75, 50);
ctx3.lineTo(50, 75);
ctx3.closePath();
ctx3.stroke();
ctx3.fill();

// // point at 5pm
ctx3.moveTo(250, 250);
ctx3.lineTo(225, 250);
ctx3.lineTo(250, 225);
ctx3.closePath();
ctx3.stroke();
ctx3.fill();

ctx3.beginPath();
ctx3.moveTo(75, 50);
ctx3.lineTo(250, 225);
ctx3.closePath();
ctx3.stroke();
ctx3.fill();

ctx3.beginPath();
ctx3.moveTo(225, 250);
ctx3.lineTo(50, 75);
ctx3.closePath();
ctx3.stroke();
ctx3.fill();

// SQUARE
// ctx3.moveTo(50, 50);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(75, 75);
// ctx3.lineTo(50, 75);

// LOWER RIGHT ANGLE
// ctx3.moveTo(50, 50);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(50, 75);

// UPPER LEFT ANGLE
// ctx3.moveTo(50, 50);
// ctx3.lineTo(25, 50);
// ctx3.lineTo(50, 25);

// UPPER RIGHT ANGLE
// ctx3.moveTo(50, 50);
// ctx3.lineTo(50, 75);
// ctx3.lineTo(75, 75);

// LOWER LEFT ANGLE
// ctx3.moveTo(50, 50);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(75, 75);

// SQUARE WITH AN X
// ctx3.moveTo(50, 50);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(75, 75);
// ctx3.lineTo(50, 75);//movetonext
// ctx3.moveTo(75, 75);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(50, 75);
// ctx3.lineTo(50, 50);

// BOWTIE
// ctx3.moveTo(75, 75);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(50, 75);
// ctx3.lineTo(50, 50);

// PARALLEL LINES
// ctx3.moveTo(75, 75);
// ctx3.lineTo(75, 50);
// ctx3.moveTo(50, 50);
// ctx3.lineTo(50, 75);
// ctx3.lineTo(50, 50);

// CROSS
// ctx3.moveTo(75, 75);
// ctx3.lineTo(75, 25);
// ctx3.moveTo(50, 50);
// ctx3.lineTo(75, 50);
// ctx3.lineTo(100, 50);
