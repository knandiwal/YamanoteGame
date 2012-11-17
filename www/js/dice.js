var state = false;
//state 
//true Rotation now
//false Rotetion stop
function diceview(var dicenum){
	switch(dicenum){
	case 1:
		document.diceImg.src = "img/dice/1.png";
	break;
	case 2:
		document.diceImg.src = "img/dice/2.png";
	break;
	case 3:
		document.diceImg.src = "img/dice/3.png";
	break;
	case 4:
		document.diceImg.src = "img/dice/4.png";
	break;
	case 5:
		document.diceImg.src = "img/dice/5.png";
	break;
	case 6:
		document.diceImg.src = "img/dice/6.png";
	break;
	}

}

function dicerol(){
	while(state==true){
		if(rolnum<6){
			rolnum++;
		}else {
			rolnum = 1;
		}
		diceview(rolnum);
	}
}

function diceOnClick(){
	if(state==true){dice_submit();state=false;}
	else {
		state=true;
		dicerol();
	}
}
var rolnum = 0;

function dice_submit(){
	var rando = 1;
	rando = 1+ Math.floor( Math.random() * 7 );
	
	diceview(rando);
		
}
