import { Drawable } from "./Drawable";
import { Point } from "./Point";
import { querySelector } from "./utils";

const svgns = "http://www.w3.org/2000/svg";

export class Line extends Drawable {
  static getFromIndexes = function (
    index1: number,
    index2: number,
    sampleNbr: number
  ) {
    const point1 = Point.getFromIndex(index1, sampleNbr);
    const point2 = Point.getFromIndex(index2, sampleNbr);

    return new Line(point1, point2);
  };

  point1: Point;
  point2: Point;

  constructor(point1: Point, point2: Point) {
    super();
    this.point1 = point1;
    this.point2 = point2;
  }

  override draw() {
    const gLines = querySelector("g.lines");

    const line = document.createElementNS(svgns, "line");
    line.setAttributeNS(null, "x1", "" + this.point1.x);
    line.setAttributeNS(null, "y1", "" + this.point1.y);
    line.setAttributeNS(null, "x2", "" + this.point2.x);
    line.setAttributeNS(null, "y2", "" + this.point2.y);

    gLines.appendChild(line);
  }
}
