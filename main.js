console.log("start");

(function () {
  var board = new Board();
  board.setConfig({
    sampleNbr: 10,
    multiplicationFactor: 2,
  });
  board.draw();
})();

console.log("this.cx: ", this.cx);
