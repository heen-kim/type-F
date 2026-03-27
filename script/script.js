$(document).ready(function(){

  // 2차 메뉴
  $('.menu>ul>li').mouseover(function(){
    $(this).find('.menu2').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.menu2').stop().slideUp(500);
  });

  // 슬라이드
  $('.slide li:gt(0)').hide();

  setInterval(function(){
    $('.slide li:first-child').fadeOut()
    .next('li').fadeIn().end().appendTo('.slide ul');
  },3000);
});