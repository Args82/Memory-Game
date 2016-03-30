console.log('loaded');
//setting document up to fire after loading
$(document).ready(function(){
// USER STORY
  //change to player counter
//indexing individual square







var userTurn = 0;


$(".cOne, .cTwo, .cThree").click(function(){
    var currentCell = $(this);
    if(userTurn == 0){
      userTurn = 1;


      currentCell.css('background', 'url(images/image1.jpg)');
    } else {
      userTurn = 0;
  
      currentCell.css('background', 'url(images/image2.jpg)')
    }      //FIND OTHER IMAGES!!!


})


});
