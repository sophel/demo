//基于js+jquery的插件脚本
var Myselector = function(options){
	var options = options||{};
	this.addOptions( options );
	this.addEvent();
}
Myselector.prototype = {
	//根据构造函数传入的options数组，构建下拉选项
	addOptions: function( options ){
		var options_root = document.querySelector(".key_selector .options");
		if( options ){
			var child;
			for( var i=0;i<options.length;i++ ){
				child = document.createElement( "div" );
				child.innerHTML = options[i];
				options_root.appendChild( child );
			}
		}
		//默认选中第一项
		setInitOption(0);
//		var trigger = document.querySelector( ".key_selector .trigger" );
//		trigger.innerHTML = options[0]+"<i class='fas fa-caret-down'></i>";
//		document.querySelector(".key_selector .options div").classList.add("selected");
	},
	//设置初始化下拉选项
	setInitOption:function( index ){
		console.log( 'hello world' );
//		var trigger = document.querySelector( ".key_selector .trigger" );
//		var option = document.querySelectorAll(".key_selector options div")[index];
//		trigger.innerHTML = option.innerHTML+"<i class='fas fa-caret-down'></i>";
//		option.classList.add( "selected" );
	},
	addEvent:function(){
		$("body").click( function(e){
			$(".key_selector .options").css("display","none");
		} );
		$(".key_selector .trigger").click(function(e){
			e.stopPropagation();//阻止冒泡至上层dom
			$(this).siblings(".options").css("display","block");
		});
		$(".key_selector .options div").click(function(e){
			e.stopPropagation();//阻止冒泡至上层dom
			$(this).addClass("selected");
			$(this).siblings().removeClass("selected");
			var val = $(this).html();
			$(this).parent(".options").siblings(".trigger").html(val);
			$(this).parent(".options").siblings(".trigger").append("<i class='fas fa-caret-down'></i>");
			$(this).parent(".options").css("display","none");
		});
	}
};

