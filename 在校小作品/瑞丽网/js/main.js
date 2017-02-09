$(function(){
	$("img.seaImg").click(function(e){
		
		$(this).hide();
		$(".search").animate({width:'230px'},500)
		e.stopPropagation();
	})
	$("input.seaTxt").focus(function(e){
		$("label.txt").hide()
	})
	$("input.seaTxt").click(function(e){
		e.stopPropagation();
	})
	$("label.txt").click(function(e){
		e.stopPropagation();
	})
	$(document).click(function(){
		$(".search").animate({width:'0px'},500,function(){
			$("img.seaImg").fadeIn();
			$("input.seaTxt").val("");
			$("label.txt").show();
		})
	})
})
$(function(){
	uu();
var rr;
function uu(){
  rr=setInterval(tt,500);
}
	function tt(){
	$(".ftu").animate({opacity: 0},1000)
		$(".ftu1").animate({opacity:1},1000)
			$(".ftu1").animate({opacity:0},1000)
				$(".ftu").animate({opacity: 1},1000)
	}
	$(".ttuu").hover(function(){
		$(this).stop().animate({top:'35px'},300)
	},function(){
		$(this).stop().animate({top:'40px'},300)
	})
})
