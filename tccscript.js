const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// -----------------------------------------
// // RECTANGLES - FILLED
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100); //startingx, startingy, pixwide, pixtall

// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

// ctx.fillStyle = "yellow";
// ctx.fillRect(380, 20, 150, 100);

// // RECTANGLES - WIRE
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(100, 200, 150, 100);

// // CLEARING THE FILLED RECTANGLE
// ctx.clearRect(385, 25, 140, 90);

// // PLAIN TEXT
// ctx.font = "30px Ariel";
// ctx.fillStyle = "purple";
// ctx.fillText("Hello World", 400, 50); //text, x and y

// //STROKE TEXT
// ctx.strokeText("Hello World", 400, 100); // is picking up the green from theh Stroke Rect above
// -----------------------------------------

// // PATHS FOR TRIANGLE
// ctx.beginPath();
// ctx.moveTo(50, 50); // starting point
// ctx.lineTo(150, 50); // straight horizontal line
// ctx.lineTo(100, 200); // diagonal line
// ctx.lineTo(50, 50); // diagonal line to starting point
// // ctx.closePath(); // shortcut to closing the triangle
// ctx.fillStyle = "coral";
// ctx.fill(); // fills triangle default black
// // ctx.stroke(); // actually DRAWS the line

// // STARTS A NEW TRIANGLE
// ctx.beginPath();
// ctx.moveTo(200, 50); // starting point
// ctx.lineTo(150, 200); // straight horizontal line
// ctx.lineTo(250, 200); // diagonal line
// ctx.closePath(); // shortcut to closing the triangle
// // ctx.fillStyle = "coral";
// // ctx.fill(); // fills triangle default black unless there is another fill style stated above
// ctx.stroke(); // actually DRAWS the line

// // PATH FOR RECTANGLE
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = "teal";
// ctx.fill();

// STARTS A NEW CIRCLE  // x y (middle of arc is x & y), radius, startangle, endangle, anticlockwise
// ctx.beginPath();
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // DRAWS HEAD
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // MOVE MOUTH
// ctx.moveTo(centerX + 100, centerY);

// // DRAW MOUTH
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // MOVE TO LEFT EYE
// ctx.moveTo(centerX - 60, centerY - 80);

// // DRAW LEFT EYE
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // MOVE TO RIGHT EYE
// ctx.moveTo(centerX + 100, centerY - 80);

// // DRAW RIGHT EYE
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

// ----------
ctx.beginPath();

// // ctx.strokeStyle = "#FF0000";
// ctx.stroke(); // actually DRAWS the line
// ctx.moveTo(50, 50); // starting point
// ctx.lineTo(150, 50); // straight horizontal line
// // ctx.lineTo(100, 200); // diagonal line
// // ctx.lineTo(50, 50); // diagonal line to starting point
// ctx.closePath(); // shortcut to closing the triangle

// RED HORIZONTAL LINE
ctx.beginPath();
ctx.strokeStyle = "#FF0000";
ctx.moveTo(50, 50); // starting point
ctx.lineTo(550, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// GREEN VERTICLE LINE
ctx.beginPath();
ctx.strokeStyle = "#00FF00";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(50, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// BLUE DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "#0000FF";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(550, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// PINK DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "#FF00FF";
ctx.moveTo(550, 450); // starting point
ctx.lineTo(300, 250); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// YELLOW DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.moveTo(300, 250); // starting point
ctx.lineTo(50, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// PURPLE VERTICLE LINE
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.moveTo(550, 50); // starting point
ctx.lineTo(550, 450); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// ORANGE HORIZONTAL LINE
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(550, 450); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();
