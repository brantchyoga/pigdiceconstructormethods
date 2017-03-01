// Backend

var playerRollTotal = 0;
var playerTotal = 0;

function Player(total, turnPoints){
this.total = total;
this.turnPoints = turnPoints;
}
var player1 = new Player(0,0);
var player2 = new Player(0,0);
var rollPoints = 0;

Player.prototype.roll = function (){
  rollPoints = Math.ceil(Math.random()* 6);
  this.turnPoints += rollPoints;
  if (rollPoints===1){
    alert("You rolled a 1!, Switch Player");
    return this.turnPoints = 0;
  }
  return this.turnPoints;
}
Player.prototype.hold = function (){
  this.total += this.turnPoints;
  return this.turnPoints=0;

}


// userinterface
$(function(){
  $("#p1Roll").click(function(){
    var test = player1.roll();
    $("#die1").text(rollPoints);
  });
  $("#p1Hold").click(function(){
      var test2 = player1.hold();
      $("#play1Status").text(player1.total);
  });
  $("#p2Roll").click(function(){
    var test3 = player2.roll();
    $("#die2").text(rollPoints);

  });
  $("#p2Hold").click(function(){
    var test4 = player2.hold();
    $("#play2Status").text(player2.total);
  });
});


// for(i=1; i<=rollTime; i++) {
//   var die1 = document.getElementById('die1');
//   dieRoll = Math.ceil(Math.random()* 6);
//   if (dieRoll===1){
//     alert("You rolled a 1!");
//     return player1RollTotal = 0;
//   }
//   player1RollTotal += dieRoll;
//   die1.innerHTML = dieRoll;
//   console.log(player1RollTotal);
// }
// }
// function rollDie2() {
//   var die2 = document.getElementById('die2');
//   dieRoll2 = Math.ceil(Math.random()* 6);
//   die2.innerHTML = dieRoll2;
//   console.log(dieRoll2);
// }
