function Target(id) {
	/*Global variables for target*/
	var marginTop;
	var marginLeft;
	/*----------------------------*/
	this.fly = function(){
		marginTop=Math.floor((Math.random()*490)+1);
		marginLeft=Math.floor((Math.random()*990)+1);
		id.css({'top':marginTop,
				'left':marginLeft});
	};
	this.posY = function(){
		return marginTop;
	};
	this.posX = function(){
		return marginLeft;
	};
	this.killFly = function(killerPosTop, killerPosLeft){
		if(marginTop > killerPosTop && marginTop < killerPosTop+100 && marginLeft > killerPosLeft && marginLeft < killerPosLeft+100){
			return true;
		};
	};
};
function Killer(id){
	var animateMove;//setInterval for animate move
	var killerPosLeft;
	var killerPosTop;
	var parentTargetWidth = parseInt(id.parent().width());
	var parentTargetHeight = parseInt(id.parent().height());
	/*killer move right*/
	this.right = function(){
		clearInterval(animateMove);
		animateMove = setInterval(function(){
			killerPosLeft = parseInt(id.css('left'));
			if(parseInt(id.css('left'))<=parentTargetWidth-100){
				id.css('left',killerPosLeft+1);
			}else{
				clearInterval(animateMove);
			};
		});
	};
	/*killer move bottom*/
	this.bottom = function(){
		clearInterval(animateMove);
		animateMove = setInterval(function(){
			killerPosTop = parseInt(id.css('top'));
			if(parseInt(id.css('top'))<=parentTargetHeight-100){
				id.css('top',killerPosTop+1);
			}
		});
	};
	/*killer move left*/
	this.left = function(){
		clearInterval(animateMove);
		animateMove = setInterval(function(){
			killerPosLeft = parseInt(id.css('left'));
			if(parseInt(id.css('left'))>0){
				id.css('left',killerPosLeft-1);
			}else{
				clearInterval(animateMove);
			};
		});
	};
	/*killer move top*/
	this.top = function(){
		clearInterval(animateMove);
		animateMove = setInterval(function(){
			killerPosTop = parseInt(id.css('top'));
			if(parseInt(id.css('top'))>0){
				id.css('top',killerPosTop-1);
			}
		});
	};
	/*killer pause || run*/
	this.center = function(){
		clearInterval(animateMove);
		if($(this).text()=="P"){
			$(this).text("R");
			$(this).siblings("button").prop("disabled",true);
		}else{
			$(this).text("P").siblings("button").prop("disabled",false);
		};
	};
	this.posY = function(){
		return killerPosTop;
	};
	this.posX = function(){
		return killerPosLeft;
	};
};
$(document).ready(function(){
var tgAnim;
var score = $('#score-text');
	/*new obj killer*/
var killer = new Killer($('#prime'));


	/*control keyup killer*/
$(document).keyup(function(e){
	var code = e.keyCode;
	switch(code){
		case 37:
            killer.left();
			break;
		case 38:
            killer.top();
			break;
		case 39:
            killer.right();
			break;
		case 40:
            killer.bottom();
			break;
		case 32:
			killer.center();
			break;
	}
	
});
	/*new obj target*/
var target = new Target($('#target'));
	/*interval for return coord target and method fly()*/
function targetAnimate (){
	clearInterval(tgAnim);
	tgAnim = setInterval(function(){
		target.fly();
	},3000);
	setInterval(function(){
		if(target.killFly(killer.posY(),killer.posX())){
			target.fly();
			score.text(+score.text()+1);
		};
	});
};
targetAnimate();
});