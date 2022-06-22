import { Line } from "./Line.js";
import { Point } from "./Point.js";

export class Board {
  #config = {
    sampleNbr: 20,
    multiplicationFactor: 3,
  };

  set config(configObject) {
    this.#config = configObject;
    this.draw();
  }

  get config() {
    return this.#config;
  }

  constructor() {
    this.draw();
  }

  drawPoints() {
    for (let i = 0; i < this.#config.sampleNbr; i++) {
      Point.getFromIndex(i, this.#config.sampleNbr).draw();
    }
  }

  drawLines() {
    for (let i = 0; i < this.#config.sampleNbr; i++) {
      const line = Line.getFromIndexes(
        i,
        i * this.#config.multiplicationFactor,
        this.#config.sampleNbr
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
