console.log('loaded')

// main functions
var owlImages =['images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg'];

var cardFaceDown = ['images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg'];


$.each( owlImages(function(index, owlImages){

  $('div#board').show(owlImages);
  });



$.each( cardFaceDown, function(index, cardFaceDown){
index = $.merge(cardFaceDown, index);







//
//
//
// var owlImages =['images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image1.jpg', 'images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg'] //creating cards, hold content
//
// $.each(owlImages, function(index, owlImages){
//
// })
// // var faceDown = ['images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg','images/facedown.jpg']
// //
// //
// // var $faceDown = $('faceDown');
//
// var $owlImages = $('owlImages');
//
//
// function makeCard(){
//   for (var i = 0; i < owlImages.length; i++) {
//     $board = $('#board').append('<div>').css('background-image', 'url(' + owlImages[i]+')');
// }
//
//
//   function shuffle () {
//    for (i = owlImages.length - 1; i > 0; i -= 1) {
//      var j = Math.floor(Math.random() * (i + 1))
//      var tempIndex = owlImages[i]
//      owlImages[i] = owlImages[j]
//      owlImages[j] = tempIndex
//    }
//    console.log(owlImages)
//   };
// $('#board').on('click', function(shuffle)
// // make load on click of start button
//
//     // $('#game-board').append($('<div>'). addClass('faceup col- card- ' + i).css('background-image', 'url(' + owls[i] + ')'));
//     // // $('#game-board').append($('<div>'). addClass('faceup ' + 'col- ' + 'card- ' + [i]).css('background-image', 'url(' + owls[i] + ')'));
//     $(function(){
//       makeCard(owlImages)
//
//  })
