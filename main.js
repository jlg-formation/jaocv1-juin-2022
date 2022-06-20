console.log("start");

(function () {
  function Board() {
    this.draw = function () {
      drawPoints();
      drawLines();
    };
  }

  var sampleNbr = 10;
  var multiplicationFactor = 2;

  function drawPoints() {
    for (var i = 0; i < sampleNbr; i++) {
      console.log("i: ", i);
      var point = Point.getFromIndex(i, sampleNbr);
      point.draw();
    }
  }

  function drawLines() {
    for (var i = 0; i < sampleNbr; i++) {
      Line.getFromIndexes(i, i * multiplicationFactor, sampleNbr).draw();
    }
  }

  var board = new Board();
  board.draw();
})();

console.log("this.cx: ", this.cx);
