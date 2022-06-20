console.log("start");

var svgns = "http://www.w3.org/2000/svg";

var sampleNbr = 10;

var cx0 = 50;
var cy0 = 50;
var r0 = 45;

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
