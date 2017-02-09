$(function(){
	$("#loutinav ul li").not(".last").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
	var mark=1;
	$("#loutinav ul li").not(".last").click(function(){
		mark=2;
		$("#loutinav ul li").find("span").removeClass("active");
		$(this).find("span").addClass("active");
	
	var $index=$(this).index();
	var $top=$("#main .louti").eq($index).offset().top;
	$("body,html").animate({scrollTop:$top},500,function(){
		mark=1;
	})
	})
	$(window).scroll(function(){
		if(mark==1){
			var $t=$(this).scrollTop();
			if($t>990){
				$("#loutinav").fadeIn();
			}else{
				$("#loutinav").fadeOut();
			}
			var $obj=$("#main .louti");
			$obj.each(function(){
				var $index=$(this).index();
				var $height=$obj.eq($index).offset().top+$(this).height()/2;
				document.title=$t+"--"+$height;
				if($t<$height){
					$("#loutinav ul li").find("span").removeClass("active");
					$("#loutinav ul li").eq($index).find("span").addClass("active");
				return false;
				}
			})
		}
	})
	$("#loutinav ul li.last").click(function(){
		$("body,html").animate({scrollTop:0},0,function(){
			mark=1;
		})
	})
})
