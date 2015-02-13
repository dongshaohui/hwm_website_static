
$(document).ready(function() {
	/*PERSON = [
	{name:'张津', address:'北京',}
	,{username:'何南', address:'上海',}
	,{username:'何北', address:'北京',}
	,{username:'何东', address:'上海',}
	,{username:'何西', address:'深圳',}
	,{username:'何南', address:'上海',}
	,{username:'何南', address:'北京',}
	,{username:'何南', address:'上海',}
	] ;*/
    //修改宽度样式开始
	$('.contact_item li').each(function (index){
	 	var iHited = (index+1)%4 ; 
	 	if (0 == iHited) {
	 		$('.contact_item li').eq(index).css({'margin-right':'0px'});	
	 	};	
 	});
	//修改宽度样式结束
    $('.b_page').each(function (index){
       $(this).click(function(){
       	   $('.b_page').removeClass('b_color');
           $(this).addClass('b_color');
           $('##next_above span').css({'margin-right':'32px'})
       });
    });
    $('.c_name').each(function (index){ 
        var Children=$(this).children();
        Children.each(function(){
        	$(this).click(function(){
                $(this).siblings().removeClass('c_all');
                $(this).addClass('c_all');
        	});
        });
    });

    /*$(".c_name a").click(function(){
    	$('.c_name[field='+$(this).parent().attr("field")+']').find('a').removeClass('c_all');
        $(this).addClass('c_all');
    });*/
});