console.log("start");

(function () {
  var svgns = "http://www.w3.org/2000/svg";

  var sampleNbr = 10;
  var multiplicationFactor = 2;

  var cx0 = 50;
  var cy0 = 50;
  var r0 = 45;

  function drawPoints() {
    var gPoints = document.querySelector("g.points");
    console.log("gPoints: ", gPoints);
    for (var i = 0; i < sampleNbr; i++) {
      console.log("i: ", i);

      var angle = (i * (Math.PI * 2)) / sampleNbr;
      var cx = cx0 + r0 * Math.cos(angle);
      var cy = cy0 + r0 * Math.sin(angle);

      var circle = document.createElementNS(svgns, "circle");
      circle.setAttributeNS(null, "cx", cx);
      circle.setAttributeNS(null, "cy", cy);
      circle.setAttributeNS(null, "r", 1);

      gPoints.appendChild(circle);
    }
  }

  function drawLines() {
    for (var i = 0; i < sampleNbr; i++) {
      drawLine(i, i * multiplicationFactor);
    }
  }

  function drawLine(p1Integer, p2Integer) {
    var gLines = document.querySelector("g.lines");

    var angle1 = (p1Integer * (Math.PI * 2)) / sampleNbr;
    var angle2 = (p2Integer * (Math.PI * 2)) / sampleNbr;

    var x1 = cx0 + r0 * Math.cos(angle1);
    var y1 = cy0 + r0 * Math.sin(angle1);
    var x2 = cx0 + r0 * Math.cos(angle2);
    var y2 = cy0 + r0 * Math.sin(angle2);

    var line = document.createElementNS(svgns, "line");
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y2", y2);

    gLines.appendChild(line);
  }

  drawPoints();
  drawLines();
})();

console.log("this.cx: ", this.cx);
