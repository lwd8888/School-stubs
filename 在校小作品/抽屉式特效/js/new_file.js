$(function(){
	$(".show ul li").hover(function(){
		$(this).stop(true).animate({width:'538px'},500).siblings().stop(true).animate({width:'100px'},500)
		$(this).find('p').css('opacity','0');
		
		$(this).siblings().find('p').css('opacity','0.5');
	})
})
