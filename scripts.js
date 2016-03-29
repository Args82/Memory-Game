console.log('loaded')

// main functions





var memoryGame = {};

var owlImages =['images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg'] //creating cards, hold content

var faceDown = ['images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg']


var $faceDown = $('faceDown')
// var;
// var;
var owlImages = $('owlImages');

function makeBoard(){

  for (var i = 0; i < owlImages.length; i++){
  $owlImages.append($('<div>').css('background-image', 'url(' + owlImages[i] + ')'));
};

  $('#board').hover(function(e){
    alert("Let's begin!");
  });



function shuffle () {
 for (i = owlImages.length - 1; i > 0; i -= 1) {
   var j = Math.floor(Math.random() * (i + 1))
   var tempIndex = owlImages[i]
   owlImages[i] = owlImages[j]
   owlImages[j] = tempIndex
 }

};
// $('#board').on('click', function(shuffle)
// make load on click of start button

    // $('#game-board').append($('<div>'). addClass('faceup col- card- ' + i).css('background-image', 'url(' + owls[i] + ')'));
    // $('#game-board').append($('<div>'). addClass('faceup ' + 'col- ' + 'card- ' + [i]).css('background-image', 'url(' + owls[i] + ')'));
    $(document).ready(function(e){
      makeBoard(owlImages)
      shuffle()
    })
