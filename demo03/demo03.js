// 原型与继承
function inherits(subType,superType){
	var _prototype=Object.create(superType.prototype);
	_prototype.constructor=subType;
	subType.prototype=_prototype;
}

function shap(x,y){
	console.log(shap.arguments);
	this.x=x;
	this.y=y;
}

shap.prototype.move=function(x,y){

	this.x+=x;
	this.y+=y;
	console.log("shap moved! x:"+this.x+",y:"+this.y);
}

function myShap(x,y,w,h){
	shap.call(this,x,y);
	this.w=w;
	this.h=h;
}

shap.prototype.area=function(){
	console.log("area:"+this.w*this.h);
}

inherits(myShap,shap);

var s1=new myShap(2,3,100,100);

console.log(s1 instanceof shap);
console.log(s1 instanceof myShap);

s1.move(2,2);
s1.area();