;(function($){
	$.fn.table=function(options){
		var defaults={
			//各种参数，各种属性
			evenRowClass:'evenRow',
			oddRowClass:'oddRow',
			currentRowClass:'currentRow',
			eventType:'mouseover',
			eventType2:'mouseout'
		}
		var options=$.extend(defaults,options);
		this.each(function(){
			var _this=$(this);
			//基数行
			_this.find(' tr:odd').addClass(options.oddRowClass);
			//偶数行
			_this.find(' tr:even').addClass(options.evenRowClass)
			_this.find(' tr').bind(options.eventType,function(){
				$(this).addClass(options.currentRowClass);
			})
			_this.find(' tr').bind(options.eventType2,function(){
				$(this).removeClass(options.currentRowClass)
			})
		})
		return this;
	}
})(jQuery);
