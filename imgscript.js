console.log("hello");
let canvas, ctx;

document.addEventListener("DOMContentLoaded", (ev) => {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 400;

	let imgObj = new Image(); // fetch img to put it on the canvas

	imgObj.onload = function () {
		// listener
		let w = canvas.width;
		let nw = imgObj.naturalWidth; //incoming height
		let nh = imgObj.naturalHeight; //incoming width
		let aspect = nw / nh; // CREATES ASPECT RATIO OF INCOMING PIC
		let h = w / aspect;
		console.log("natural width ", nw);
		console.log("natural height ", nh);
		console.log("aspect ", aspect); // if changing canvas width to 600, what is the aspect ratio of the height?
		console.log("new width ", w);
		console.log("new height with aspect ratio is now ", h);

		canvas.height = h;

		// ctx.drawImage(imgObj, 0, 0); // will take only the top, left corner of the pic without the aspect ratio applied
		ctx.drawImage(imgObj, 0, 0, w, h); // passing in new imgObj starting at 0/0 with the new aspect width and height
		// ctx.drawImage(imgObj, dx, dy);
		// ctx.drawImage(imgObj, dx, dy, dw, dh);
		// ctx.drawImage(imgObj, sx, sy, sw, sh, dx, dy, dw, dh); // source x/y, source w/h to get a PIECE of the image below
		// ctx.drawImage(imgObj, 0, 650, 200, 200 / aspect, 0, 0, w, h);
	};

	imgObj.src =
		"https://i0.wp.com/clayandmilk.com/wp-content/uploads/2019/09/tennis-in-out-line-call.jpg";

	canvas.addEventListener("click", greyscale);
	// canvas.addEventListener("click", colorChannel);
});

const greyscale = function (ev) {
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	let arr = imgData.data;
	for (let i = 0; i < arr.length; i = i + 4) {
		// adding 4 b/c r, g, b and alpha
		let ttl = arr[i] + arr[i + 1] + arr[i + 2];
		let avg = parseInt(ttl / 3);
		arr[i] = avg; //red turns grey
		arr[i + 1] = avg; //green turns grey
		arr[i + 2] = avg; //blue turns grey
	}
	imgData.data = arr;
	ctx.putImageData(imgData, 0, 0);
};

const colorChannel = function (ev) {
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	let arr = imgData.data;
	for (let i = 0; i < arr.length; i = i + 4) {
		// arr[i] = 0; //R  removes the red channel
		//arr[i+1] = 0;   //G  removes the green channel
		arr[i + 2] = 0; //B  removes the blue channel
	}
	imgData.data = arr;
	ctx.putImageData(imgData, 0, 0);

	// puts the extracted data from the image and put it into the canvas
	let img = canvas.toDataURL("image/jpeg", 1.0);
	console.log("IMAGE... ", img); // provides the base64 encoded image data
	document.querySelector("img").src = img;
};
