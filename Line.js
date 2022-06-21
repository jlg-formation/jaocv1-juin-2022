import { Drawable } from "./Drawable.js";
import { Point } from "./Point.js";

const svgns = "http://www.w3.org/2000/svg";

export class Line extends Drawable {
  static getFromIndexes = function (index1, index2, sampleNbr) {
    const point1 = Point.getFromIndex(index1, sampleNbr);
    const point2 = Point.getFromIndex(index2, sampleNbr);

    return new Line(point1, point2);
  };

  constructor(point1, point2) {
    super();
    this.point1 = point1;
    this.point2 = point2;
  }

  draw() {
    super.draw();

    const gLines = document.querySelector("g.lines");

    const line = document.createElementNS(svgns, "line");
    line.setAttributeNS(null, "x1", this.point1.x);
    line.setAttributeNS(null, "y1", this.point1.y);
    line.setAttributeNS(null, "x2", this.point2.x);
    line.setAttributeNS(null, "y2", this.point2.y);

    gLines.appendChild(line);
  }
}
