import { Drawable } from "./Drawable.js";

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const svgns = "http://www.w3.org/2000/svg";

function getAngleFromIndex(index, sampleNbr) {
  return (index * (Math.PI * 2)) / sampleNbr;
}

export class Point extends Drawable {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    super.draw();
    const gPoints = document.querySelector("g.points");
    const circle = document.createElementNS(svgns, "circle");
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "r", 1);

    gPoints.appendChild(circle);
  }

  static getFromAngle(angle) {
    const cx = cx0 + r0 * Math.cos(angle);
    const cy = cy0 + r0 * Math.sin(angle);

    return new Point(cx, cy);
  }

  static getFromIndex(index, sampleNbr) {
    return Point.getFromAngle(getAngleFromIndex(index, sampleNbr));
  }
}