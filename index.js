$(document).ready(function(){
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
var bool = false;


$(document).keyup(function(e){
	var code = e.keyCode;
	switch(code){
		case 37:
			$("#left:not(:disabled)").trigger('click');
			break;
		case 38:
			$("#top:not(:disabled)").trigger('click');
			break;
		case 39:
			$("#right:not(:disabled)").trigger('click');
			break;
		case 40:
			$("#bottom:not(:disabled)").trigger('click');
			break;
		case 32:
			$("#center").trigger('click');//pause and run game
			break;
	}
	
})


function target(){
		clearInterval(missionAnim);
		missionAnim = setInterval(function(){
		//for increment score
		if(bool){
			$("#score label").text(+$("#score label").text()+1);
			bool = false;
		}
		/*----------------*/
		rTop = Math.floor((Math.random()*490)+1);
		rLeft = Math.floor((Math.random()*990)+1);
		mission.css({"top":rTop,
					 "left":rLeft,
					 "opacity":"1"});
	},1500);
};
target();
$("#right").on('click',function(){
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
	$(this).css("box-shadow","none").prop("disabled",true)
		   .siblings("button:not('#center')").css("box-shadow","0 0 20px black")
		   .prop("disabled",false);
});

$("#bottom").on('click',function(){
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
	$(this).css("box-shadow","none").prop("disabled",true)
		   .siblings("button:not('#center')").css("box-shadow","0 0 20px black")
		   .prop("disabled",false);
});
$("#left").on('click',function(){
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
	$(this).css("box-shadow","none").prop("disabled",true)
		   .siblings("button:not('#center')").css("box-shadow","0 0 20px black")
		   .prop("disabled",false);
});
$("#top").on('click',function(){
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
	$(this).css("box-shadow","none").prop("disabled",true)
		   .siblings("button:not('#center')").css("box-shadow","0 0 20px black")
		   .prop("disabled",false);
});
$("#center").on('click',function(){
	clearInterval(animate);
	if($(this).text()=="P"){
		$(this).text("R");
		$(this).siblings("button").prop("disabled",true);
		clearInterval(missionAnim);
	}else{
		$(this).text("P").siblings("button").prop("disabled",false);
		target();
	};
	/*for animate panel control*/
	$(this).siblings("button:not('#center')").css("box-shadow","0 0 20px black");
	
});

});