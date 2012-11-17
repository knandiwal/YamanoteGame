var state = false;
var rolnum = 1;
var diceImgData = [];
function Sleep( T ){ 
   var d1 = new Date().getTime(); 
   var d2 = new Date().getTime(); 
   while( d2 < d1+1*T ){    //T秒待つ 
       d2=new Date().getTime(); 
   } 
   return; 
} 


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
    setTimeout(function callback(){
	    diceview(rolnum);
		Sleep( 50 );
		//alert(rolnum);
        if(rolnum<6){
			rolnum++;
			//Sleep( 1 );//1秒待つ 
		}else {
			
			rolnum = 1;
			//Sleep( 1 );//1秒待つ 
			
		}
		setTimeout(callback);
        //setTimeout(dicerol(), 100);
	}
	)
}

function diceOnClick(){
    if(state==true){dice_submit();state=false;}
	else {
		state=true;
		dicerol();
	}
}


