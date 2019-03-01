mui.init();
mui.plusReady(function(){
	//alert("页面加载完毕");
	mui('.mui-button-row').on('tap','#btn_submit',function(){
	  //alert("hello world");
	  //var name = document.getElementById("user_name").value;
	  var user_name = mui("#user_name")[0].value;//用户名
	  var user_pswd = mui("#user_pswd")[0].value;//密码
	  if( isNull(user_name) || isNull(user_pswd))
	  {
	  	alert("用户名或密码不能为空！");
	  }
	  else
	  {
	  	if( user_name!="马少玲" || user_pswd!="123" )
	  	{
	  		alert("用户名和密码不匹配！");
	  	}
	  	else
	  	{
	  		//alert("登录成功，即将跳转","提示","确认",function(){})
	  		//登录并跳转至详情页
	  		mui.openWindow({
	  			url:"home.html",
	  			id:"home.html"
	  		});
	  	}
	  }
	});
});  