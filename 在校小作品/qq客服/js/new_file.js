$(function(){
	var bb=true;
	$("#but").click(function(){
		if(bb){
		$(this).parent("#qq").animate({right:'-160px'},300)
		$(this).css('background','url(img/but_bg.png) no-repeat center left')
		bb=false;
		}else{
		$(this).parent("#qq").animate({right:'0px'},300)
		$(this).css('background','url(img/but_bg.png) no-repeat center right')	
		bb=true;
		}
		})
})
