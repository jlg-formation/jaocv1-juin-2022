console.log("start");

(function () {
  function Board() {
    this.draw = function () {
      drawPoints();
      drawLines();
    };
  }

  var svgns = "http://www.w3.org/2000/svg";

  var sampleNbr = 10;
  var multiplicationFactor = 2;

  function drawPoints() {
    for (var i = 0; i < sampleNbr; i++) {
      console.log("i: ", i);
      var point = Point.getFromIndex(i, sampleNbr);
      point.draw();
    }
  }

  function drawLines() {
    for (var i = 0; i < sampleNbr; i++) {
      drawLine(i, i * multiplicationFactor);
    }
  }

  function drawLine(p1Integer, p2Integer) {
    var gLines = document.querySelector("g.lines");

    var point1 = Point.getFromIndex(p1Integer, sampleNbr);
    var point2 = Point.getFromIndex(p2Integer, sampleNbr);

    var line = document.createElementNS(svgns, "line");
    line.setAttributeNS(null, "x1", point1.x);
    line.setAttributeNS(null, "y1", point1.y);
    line.setAttributeNS(null, "x2", point2.x);
    line.setAttributeNS(null, "y2", point2.y);

    gLines.appendChild(line);
  }

  var board = new Board();
  board.draw();
})();

console.log("this.cx: ", this.cx);
