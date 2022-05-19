$(document).ready(function () { 
    //top 效果
    $('.top-btn').click(function(event){
      event.preventDefault();
      $('html,body').animate({
        scrollTop:0},2000);
    });
  });

