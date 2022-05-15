$(document).ready(function () { 
    //top 效果
    $('.top-btn').click(function(event){
      event.preventDefault();
      $('html,body').animate({
        scrollTop:0},2000);
    });
    $('.charge-btn').click(function(event){
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
    })
  });


  let btn1 = document.querySelector('.btn-100');
  let btn2 = document.querySelector('.btn-150');
  let btn3 = document.querySelector('.btn-200');
  let btn4 = document.querySelector('.btn-250');
  let btn5 = document.querySelector('.btn-more');
  let basicSub = document.querySelector('.basic-sub');
  let normalSub = document.querySelector('.normal-sub')
  let basicFee = document.querySelector('.basic-fee');
  let normalFee = document.querySelector('.normal-fee');

btn1.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=10000;
  normalSub.textContent=10000;
  basicFee.textContent=600;
  normalFee.textContent=1600;
})

btn2.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=15000;
  normalSub.textContent=15000;
  basicFee.textContent=500;
  normalFee.textContent=1500;
})

btn3.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=20000;
  normalSub.textContent=20000;
  basicFee.textContent=400;
  normalFee.textContent=1400;
})
btn4.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=25000;
  normalSub.textContent=25000;
  basicFee.textContent=300;
  normalFee.textContent=1300;
})
btn5.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=">25000";
  normalSub.textContent=">25000";
  basicFee.textContent=200;
  normalFee.textContent=1200;
})

  