import { Drawable } from "./Drawable";
import { querySelector } from "./utils";

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const svgns = "http://www.w3.org/2000/svg";

function getAngleFromIndex(index: number, sampleNbr: number) {
  return (index * (Math.PI * 2)) / sampleNbr;
}

export class Point extends Drawable {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    super.draw();
    const gPoints = querySelector("g.points");
    if (gPoints === null) {
      throw new Error("cannot find gPoints (element with selector g.points)");
    }
    const circle = document.createElementNS(svgns, "circle");
    circle.setAttributeNS(null, "cx", String(this.x));
    circle.setAttributeNS(null, "cy", "" + this.y);
    circle.setAttributeNS(null, "r", "1");

    gPoints.appendChild(circle);
  }

  static getFromAngle(angle: number) {
    const cx = cx0 + r0 * Math.cos(angle);
    const cy = cy0 + r0 * Math.sin(angle);

    return new Point(cx, cy);
  }

  static getFromIndex(index: number, sampleNbr: number) {
    return Point.getFromAngle(getAngleFromIndex(index, sampleNbr));
  }
}
