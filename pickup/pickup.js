var colWidth = 60;
var rowHeight = colWidth * 6;
var numRows = 1;
var numCols = 6;
var boardWidth = 1 + numCols * colWidth;
var boardHeight = 1 + numRows * rowHeight;
var stickLength = 50;
var pi = 3.14159265;
var lineThicknessCorrection = -0.034
var gCanvasElement;
var gDrawingContext;
var gStickCount;
var gStickCountElem;
var crossCount;
var crossCountElem;
var estimate;
var estimateElem;
var errorPercent;
var errorPercentElem;
var numSticks = 100
var numSticksSelectElem;
var numSticksElem;
var grey = "#333";
var brown = "rgba(189,54,19,1)";

var log = console.log.bind(console);


function pickupOnClick(e) {
	dropSticks(numSticks);
}

function numSticksOnChange(e) {
	numSticks = numSticksSelectElem.value;
	log(numSticks)
	numSticksElem.innerHTML = numSticks;
}

function dropSticks(numSticks) {
	drawBoard();
	for (var n = 0; n < numSticks; n++) dropStick();
	// estimate = 1/((crossCount/gStickCount) * colWidth / (2 * stickLength));
	estimate = 2.0 * stickLength * gStickCount / crossCount / colWidth + lineThicknessCorrection;
	estimateElem.innerHTML = estimate.toPrecision(7);
	errorPercent = 100 * Math.abs(pi - estimate) / pi;
	errorPercentElem.innerHTML = errorPercent.toPrecision(2);
}

function dropStick() {
	var xStart = stickLength + Math.round(Math.random() * (boardWidth - 2 * stickLength));
	var yStart = stickLength + Math.round(Math.random() * (boardHeight - 2 * stickLength));
	var angle = Math.random() * 2 * pi;
	var xLength = Math.floor(stickLength * Math.cos(angle));
	var yLength = Math.floor(stickLength * Math.sin(angle));
	var xEnd = xStart + xLength;
	var yEnd = yStart + yLength;
	var xLeft = Math.min(xStart, xEnd);
	var xRight = Math.max(xStart, xEnd);
	gDrawingContext.beginPath();
	gDrawingContext.moveTo(xStart, yStart);
	gDrawingContext.lineTo(xEnd, yEnd);
	/* draw it! */
	gDrawingContext.strokeStyle = brown;
	gDrawingContext.stroke();
	gStickCount += 1;
	if (Math.ceil((xLeft + 1) / colWidth) == Math.floor(xRight / colWidth)) { // If Crosses Cols
		crossCount += 1;
	}
	gStickCountElem.innerHTML = gStickCount;
	crossCountElem.innerHTML = crossCount;
}

function drawBoard() {
	// gDrawingContext.clearRect(0, 0, boardWidth, boardHeight);
	gDrawingContext.beginPath();
	/* horizontal lines */
	for (var y = 0; y <= boardHeight; y += rowHeight) {
		gDrawingContext.moveTo(0, 0.5 + y);
		gDrawingContext.lineTo(boardWidth, 0.5 + y);
	}
	/* draw it! */
	gDrawingContext.strokeStyle = "#B8B8A9";
	gDrawingContext.stroke();
	gDrawingContext.beginPath();
	/* vertical lines */
	for (var x = 0; x <= boardWidth; x += colWidth) {
		gDrawingContext.moveTo(0.5 + x, 0);
		gDrawingContext.lineTo(0.5 + x, boardHeight);
	}
	/* draw it! */
	gDrawingContext.strokeStyle = "#B8B8A9";
	gDrawingContext.stroke();
}

function newGame(n) {
	gStickCount = 0.0;
	crossCount = 0.0;
	estimate = 0.0;
	errorPercent = 0.0;
	drawBoard();
	dropSticks(n);
}

function initGame(canvasElement, StickCountElement, crossCountElement, estimateElement, errorPercentElement, numSticksSelectElement, numSticksElement) {
	if (!canvasElement) {
		canvasElement = document.createElement("canvas");
		canvasElement.id = "pickup-canvas";
		document.body.appendChild(canvasElement);
	}
	gCanvasElement = canvasElement;
	gCanvasElement.width = boardWidth;
	gCanvasElement.height = boardHeight;
	gCanvasElement.addEventListener("click", pickupOnClick, false);
	gStickCountElem = StickCountElement;
	crossCountElem = crossCountElement;
	estimateElem = estimateElement;
	errorPercentElem = errorPercentElement;
	numSticksSelectElem = numSticksSelectElement;
	numSticks = numSticksSelectElem.value
	
	numSticksElem = numSticksElement;
	numSticksSelectElem.addEventListener("change", numSticksOnChange, false);
	gDrawingContext = gCanvasElement.getContext("2d");
	newGame(numSticks);
}
