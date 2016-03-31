console.log('loaded');
//setting document up to fire after loading
$(document).ready(function(){


// write USER STORY
  //change to player counter
//indexing individual square
var ticTacToe = {};
var player = 0;
$('#boardSetUp').click('td', function(e){
  var $td = $(e.currentTarget);
});
var currentPlayer = 0;

$('td').click(function(){
    var currentCell = $(this);
    var taken = currentCell.hasClass("taken");

    if (!taken) {
      if(player == 0){
        player = 1;
        currentCell.css('background', 'url(images/image3.jpg)');
      } else {
        player = 0;
        currentCell.css('background', 'url(images/image2.jpg)')
      }
      currentCell.addClass("taken");
    }else {
      alert("can't do that silly!");
    }

})
});

// var usedCell = {
//
// }
//   if(player == winner)
// //winning matches
//
// var possibleWins =
// ['c1','c4','c7'],
// ['c2','c5','c8'],
// ['c3','c6','c9'],
// ['c3','c5', 'c7'],
// ['c1','c5','c9']
//
// function findWinner(possibleWins){
//   var winner = {};
//   for (var i = 0; i < possibleWins.length; i++) {
//     console.log(possibleWins[i]);
//   }
//

//
