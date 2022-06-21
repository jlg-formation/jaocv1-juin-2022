import { Line } from "./Line.js";
import { Point } from "./Point.js";

export class Board {
  constructor() {
    this.config = {
      sampleNbr: 20,
      multiplicationFactor: 3,
    };
  }

  setConfig(configObject) {
    this.config = configObject;
  }

  drawPoints() {
    for (let i = 0; i < this.config.sampleNbr; i++) {
      Point.getFromIndex(i, this.config.sampleNbr).draw();
    }
  }

  drawLines() {
    for (let i = 0; i < this.config.sampleNbr; i++) {
      const line = Line.getFromIndexes(
        i,
        i * this.config.multiplicationFactor,
        this.config.sampleNbr
      );

      line.draw();
    }
  }

  draw() {
    this.clean();
    this.drawPoints();
    this.drawLines();
  }

  clean() {
    ["g.points", "g.lines"].forEach(
      (selector) => (document.querySelector(selector).innerHTML = "")
    );
  }
}
