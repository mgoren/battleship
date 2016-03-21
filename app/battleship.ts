/// <reference path="battleship-classes-interfaces.ts" />

$(function() {
  let board = new BattleshipGame.Board(10);
  let ship = new BattleshipGame.Ship(2);
  $("form#location").submit(function(event) {
    event.preventDefault();
    let x = parseInt($("#x").val());
    let y = parseInt($("#y").val());
    let locn = board.find(x, y);
    if (ship.setPeg(locn)) {
      console.log("placed at " + x + ", " + y);
    } else {
      console.log("failure to place at " + x + ", " + y);
    }
  });
});