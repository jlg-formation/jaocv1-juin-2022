console.log("start");

(function () {
  "use strict";
  var board = new Board();
  board.setConfig({
    sampleNbr: 100,
    multiplicationFactor: 2,
  });
  board.draw();
})();

console.log("this.cx: ", this.cx);
