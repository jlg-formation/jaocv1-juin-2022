class Board {
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
    for (var i = 0; i < this.config.sampleNbr; i++) {
      console.log("i: ", i);
      Point.getFromIndex(i, this.config.sampleNbr).draw();
    }
  }

  drawLines() {
    for (var i = 0; i < this.config.sampleNbr; i++) {
      var line = Line.getFromIndexes(
        i,
        i * this.config.multiplicationFactor,
        this.config.sampleNbr
      );

      console.log("line: ", line);
      line.draw();
    }
  }

  draw() {
    this.drawPoints();
    this.drawLines();
  }
}
