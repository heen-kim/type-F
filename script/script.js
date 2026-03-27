$(document).ready(function(){
  $('.menu>ul>li').mouseover(function(){
    $(this).find('.menu2').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.menu2').stop().slideUp(500);
  });
});