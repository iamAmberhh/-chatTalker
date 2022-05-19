$(document).ready(function () { 
    $('.plan-btn-item').click(function(event){
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
    })
  });

  
  const planBtn_100 = document.querySelector('#btn-100');
  const planBtn_150 = document.querySelector('#btn-150');
  const planBtn_200 = document.querySelector('#btn-200');
  const planBtn_250 = document.querySelector('#btn-250');
  const planBtn_more = document.querySelector('#btn-more');
  const basicSub = document.querySelector('.basic-sub');
  const normalSub = document.querySelector('.normal-sub')
  const basicFee = document.querySelector('.basic-fee');
  const normalFee = document.querySelector('.normal-fee');

planBtn_100.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=10000;
  normalSub.textContent=10000;
  basicFee.textContent=600;
  normalFee.textContent=1600;
})

planBtn_150.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=15000;
  normalSub.textContent=15000;
  basicFee.textContent=500;
  normalFee.textContent=1500;
})

planBtn_200.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=20000;
  normalSub.textContent=20000;
  basicFee.textContent=400;
  normalFee.textContent=1400;
})
planBtn_250.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=25000;
  normalSub.textContent=25000;
  basicFee.textContent=300;
  normalFee.textContent=1300;
})
planBtn_more.addEventListener("click",function(e){
  e.preventDefault();
  basicSub.textContent=">25000";
  normalSub.textContent=">25000";
  basicFee.textContent=200;
  normalFee.textContent=1200;
})
