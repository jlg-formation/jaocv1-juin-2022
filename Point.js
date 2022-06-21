(function () {
  "use strict";

  var cx0 = 50;
  var cy0 = 50;
  var r0 = 45;

  var svgns = "http://www.w3.org/2000/svg";

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.draw = function () {
    var gPoints = document.querySelector("g.points");
    var circle = document.createElementNS(svgns, "circle");
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "r", 1);

    gPoints.appendChild(circle);
  };

  Point.getFromAngle = function (angle) {
    var cx = cx0 + r0 * Math.cos(angle);
    var cy = cy0 + r0 * Math.sin(angle);

    return new Point(cx, cy);
  };

  Point.getFromIndex = function (index, sampleNbr) {
    return Point.getFromAngle(getAngleFromIndex(index, sampleNbr));
  };

  function getAngleFromIndex(index, sampleNbr) {
    return (index * (Math.PI * 2)) / sampleNbr;
  }

  window.Point = Point;
})();
