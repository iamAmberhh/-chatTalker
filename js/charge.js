$(document).ready(function () { 
    $('.plan-btn-item').click(function(event){
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
    })
  });

  const plan = [
    {
      member: "10000",
      basic: 600,
      standard: 1600
    },
    {
      member: "15000",
      basic: 500,
      standard: 1500
    },
    {
      member: "20000",
      basic: 400,
      standard: 1400
    },
    {
      member: "25000",
      basic: 300,
      standard: 1300
    },
    {
      member: ">25000",
      basic: 100,
      standard: 1200
    }
  ];
  
  const planBtn = document.querySelector(".plan_btn");
  const member = document.querySelectorAll(".member");
  const basic = document.querySelector(".basic");
  const standard = document.querySelector(".standard");
  
  planBtn.addEventListener("click", function (e) {
    e.preventDefault();
    plan.forEach(function (item, index) {
      if (e.target.id == item.member) {
        member[0].textContent = `${item.member}`;
        member[1].textContent = `${item.member}`;
        basic.textContent = `${item.basic}`;
        standard.textContent = `${item.standard}`;
      }
    });
  });
  