$(document).ready(function(){
var right = $("#right");
var left = $("#left");
var top = $("#top");
var bottom = $("#bottom");
var center = $("#center");
var animate;
var missionAnim;
var workWidth = $("#game-block").width();
var workHeight = $("#game-block").height();
var prime = $("#prime");
var primePosLeft;
var primePosTop;
var primeWidth = $("#prime").width();
var primeHeight = $("#prime").height();
var mission = $("#mission");
var rTop;
var rLeft;
var currNum = 0;
var bool = false;
/*for control move primary and interval missionAnim*/
var runLeft = 0;
var runRight = 0;
var runTop = 0;
var runBottom = 0;



$(document).keyup(function(e){
	var code = e.keyCode;
	switch(code){
		case 37:
			left.trigger('click');
			break;
		case 38:
			top.trigger('click');
			break;
		case 39:
			right.trigger('click');
			break;
		case 40:
			bottom.trigger('click');
			break;
		case 32:
			center.trigger('click');//pause and run game
			break;
	}
	
})


function target(){
		clearInterval(missionAnim);
		missionAnim = setInterval(function(){
		if(bool){
			currNum++;
			$("#score label").text(currNum);
			bool = false;
		}
		rTop = Math.floor((Math.random()*490)+1);
		rLeft = Math.floor((Math.random()*990)+1);
		mission.css({"top":rTop,
					 "left":rLeft,
					 "opacity":"1"});
	},1000);
}
target();

right.on('click',function(){
	var maxLine = workWidth - primeWidth;
	clearInterval(animate);
	animate = setInterval(function(){
	var primePos = parseInt(prime.css("left"));
		if(primePos >= maxLine){
			clearInterval(animate);
			return false;
		};	
		prime.css("left", primePos +5);
		primePosLeft = primePos;
		if(rTop>primePosTop && rTop<primePosTop+100 && rLeft>primePosLeft && rLeft<primePosLeft+100){	
			mission.css({"left":"0px",
						 "top":"0px",
				 		 "opacity":"0"});
			bool=true;
		};
	},10);
	/*for animate panel control*/
	$(this).parent("div").children("button:not('#center')").css("box-shadow","0 0 20px black");
	$(this).css("box-shadow","none");
	$(this).prop("disabled",true).siblings("button").prop("disabled",false);
});

bottom.on('click',function(){
	var maxLine = workHeight - primeHeight;
	clearInterval(animate);
	animate = setInterval(function(){
	var primePos = parseInt(prime.css("top"));
		if(primePos >= maxLine){
			clearInterval(animate);
			return false;
		};	
		prime.css("top", primePos +5);
		primePosTop = primePos;
		if(rTop>primePosTop && rTop<primePosTop+100 && rLeft>primePosLeft && rLeft<primePosLeft+100){	
			mission.css({"left":"0",
						 "top":"0",
				 		 "opacity":"0"});
			bool=true;
		};
	},10);
	/*for animate panel control*/
	$(this).parent("div").children("button:not('#center')").css("box-shadow","0 0 20px black");
	$(this).css("box-shadow","none");
	$(this).prop("disabled",true).siblings("button").prop("disabled",false);
});
left.on('click',function(){
	var maxLine = workHeight - primeHeight;
	clearInterval(animate);
	animate = setInterval(function(){
	var primePos = parseInt(prime.css("left"));
		if(primePos <= 0){
			clearInterval(animate);
			return false;
		};	
		prime.css("left", primePos - 5);
		primePosLeft = primePos;
		if(rTop>primePosTop && rTop<primePosTop+100 && rLeft>primePosLeft && rLeft<primePosLeft+100){	
			mission.css({"left":"0",
						 "top":"0",
				 	     "opacity":"0"});
			bool=true;
		};
	},10);
	/*for animate panel control*/
	$(this).parent("div").children("button:not('#center')").css("box-shadow","0 0 20px black");
	$(this).css("box-shadow","none");
	$(this).prop("disabled",true).siblings("button").prop("disabled",false);
});
top.on('click',function(){
	var maxLine = workHeight - primeHeight;
	clearInterval(animate);
	animate = setInterval(function(){
	var primePos = parseInt(prime.css("top"));
		if(primePos <= 0){
			clearInterval(animate);
			return false;
		};	
		prime.css("top", primePos - 5);
		primePosTop = primePos;
		if(rTop>primePosTop && rTop<primePosTop+100 && rLeft>primePosLeft && rLeft<primePosLeft+100){	
			mission.css({"left":"0",
						 "top":"0",
				 		 "opacity":"0"});
			bool=true;
		};
	},10);
	/*for animate panel control*/
	$(this).parent("div").children("button:not('#center')").css("box-shadow","0 0 20px black");
	$(this).css("box-shadow","none");
	$(this).prop("disabled",true).siblings("button").prop("disabled",false);
});
$("#center").on('click',function(){
	clearInterval(animate);
	if($(this).text()=="P"){
		$(this).text("R");
		$(this).siblings("button").prop("disabled",true);
		clearInterval(missionAnim);
	}else{
		$(this).siblings("button").prop("disabled",false);
		$(this).text("P");
		target();
	};
	/*for animate panel control*/
	$("#left, #top, #bottom").attr("data-shadow","none");
	$(this).parent("div").children("button:not('#center')").css("box-shadow","0 0 20px black");
	
});

});