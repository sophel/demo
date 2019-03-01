mui.init({
  preloadPages:[
    {
      url:'picView.html',
	    id:'picView.html',//预加载图片预览页面
    }
  ]
});
window.onload = function(){
		alert( "hello world" );
		alert( document.querySelectorAll("li[data-right='1']").length );
};
mui.plusReady(function(){

	
	mui(".mui-table-view.mui-grid-view.mui-grid-9").on("tap",".mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3:nth-child(9)",function(){
		mui.openWindow({url:"siderMenu.html",
	  			id:"siderMenu.html"});
	});//end-on
	
	mui(".mui-content").on('tap','#openPopover',function(){
		
	});
	mui(".mui-table-view").on('tap','.mui-table-view-cell:nth-child(3)',function(){
	 	my_page = plus.webview.getWebviewById("picView.html");
	 	if(!my_page)
	 	{
	 		alert("预加载页面句柄获取失败");
	 	}
	 	else
	 	{
	 		//触发预加载页面初始化资源
	 		mui.fire(my_page,'InitSource',{
	    	sampleIndex:sample_id
  		});
  			//打开预加载页面
		mui.openWindow({
    	id:'product.html',
    	waiting:{
    		  autoShow:true,//自动显示等待框，默认为true
			title:'正在加载...'//等待对话框上显示的提示内容
	    	}
		});
	 	}
	})
}); 