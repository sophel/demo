/******
 * Author:msl
 * date:2017-04-27
 * function: getClassOfVariable
 * ******/
function type( o )
{
	
	//1.pick undefined
	if( o === undefined )return "undefined";
	//2.pick null
	if( o == null )return "null";
	//3.pick NaN
	if( o !== o ) return "NaN";
	//4.pick orgion type:string,number,boolean,function,left all objects
	if( (t = typeof(o)) != "object" )return t;
	//5.pick native object:String,Number,Boolean,left all user-defined objects
	if( (c = classof(o)) != "Object" )return c;
	//6.pick all user-defined objects
	if( o.constructor && typeof(o.constructor)==="function" &&(n=o.constructor.getName()) )return n;
	return "Object";
}
function classof( o )
{
	return Object.prototype.toString.call(o).slice(8,-1);
};
Function.prototype.getName = function()
{
	if( "name" in this )return this.name;
	return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};
