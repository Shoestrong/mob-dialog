function mob_dialog(msg,btn_num,btn_left,btn_right,left_fn,right_fn){
	if($('#dialog_bg').length==0 && $('#dialog_box').length==0){
		var html=
				'<div class="dialog_bg" id="dialog_bg"></div>'
				+'<div class="dialog_box" id="dialog_box">'
					+'<div class="dialog_msg">信息</div>'
					+'<div class="dialog_btn" id="dialog_btn">'
					+'</div>'
				+'</div>';
		$(html).appendTo($("body"));
		$(".dialog_msg").text(msg);
		
		//判断有没有按钮，就移除
		if(typeof btn_num==="undefined"){
			$("#dialog_btn").remove();
		}
		//判断是有几个按钮
		if(btn_num==1){
			$("#dialog_btn").append("<div id='btn_left'>"+btn_left+"</div>");
			if(btn_left==""){
				$("#btn_left").remove();
				$("#dialog_btn").append("<div id='btn_right'>"+btn_right+"</div>");
			}
		}
		if(btn_num==2){
			$("#dialog_btn").append("<div id='btn_left'>"+btn_left+"</div><div id='btn_right'>"+btn_right+"</div>");
		}
		
		//获取元素的高度
		var mt=$(".dialog_box").height()/2;
		$(".dialog_box").css("margin-top",-mt+'px');
		
		//点击确认
		$("#btn_left").click(function(){
			left_fn && left_fn();
			closeAlert();
		})
		//点击取消
		$("#btn_right").click(function(){
			right_fn && right_fn();
		})
	}
}
function closeAlert(){
	$('#dialog_bg').remove();
    $('#dialog_box').remove();
}
function doneFn(){
	$('#del').parent().remove();
}


$('#del').click(function(){
	mob_dialog("请上传JPEG/JPG/PNG/GIF格式的图片",2,"确认","取消",doneFn,closeAlert);
})
/*$('#del').click(function(){
	mob_dialog("请上传JPEG/JPG/PNG/GIF格式的图片",1,"","取消",doneFn,closeAlert);
})*/



