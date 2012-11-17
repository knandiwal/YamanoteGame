var state = false;
var rolnum = 0;
var diceImgData = [];

function onload()
{
    for(var i=1; i<=6; i++)
    {
        diceImgData[i] = new Image();
        diceImgData[i].src = "img/dice/" + i + ".png";
    }
}

//state 
//true Rotation now
//false Rotetion stop
function diceview(dicenum){
    document.diceImg.src = diceImgData[dicenum].src;
}

function dice_submit(){
	var rando = 1;
	rando = Math.floor( Math.random()*6+1 );
	
	diceview(rando);
		
}


function dicerol(){
    while(state){
	    diceview(rolnum);
        if(rolnum<7){
			rolnum++;
		}else {
			rolnum = 1;
		}
        //setTimeout(dicerol(), 100);
	}
}

function diceOnClick(){
    if(state==true){dice_submit();state=false;}
	else {
		state=true;
		dicerol();
	}
}


