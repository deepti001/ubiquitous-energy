document.getElementById("checkForContinue").style.display = "none";

function startTheGame(){
document.getElementById("startTheGameDiv").style.display = "none";
var startTime = new Date().getTime();
var stopWatchTime = new Date().getTime();
var counter = 0;

window.onresize = sizeShifting;
window.onload = sizeShifting;

document.getElementById("designs").onclick = function() {
	counter++;
	var endTime = new Date().getTime();
	var timeTaken = (endTime - startTime)/1000;
	document.getElementById("designs").style.display = "none";

	displayStatus(timeTaken, counter);

	designsAppearAgain();
	
}

function displayStatus(getTimeTaken, getCounter){
	document.getElementById("timeCalculated").innerHTML = getTimeTaken + "seconds";
	document.getElementById("numberOfClicks").innerHTML = getCounter ;
}

function designsAppearAgain(){
		setTimeout(designShape(),Math.random()*200);
}

function designShape(){
	var width = (Math.random()*100) +50;
	var top = Math.random() * (window.innerHeight - width - 100) ;
	var left = Math.random() * (window.innerWidth -width);
	
	document.getElementById("designs").style.width = width + "px";
	document.getElementById("designs").style.height = width + "px" ;
	document.getElementById("designs").style.top = top + "px";
	document.getElementById("designs").style.left = left + "px";
	
	document.getElementById("designs").style.borderRadius = "50%";

	if(Math.random()<0.3){
		document.getElementById("designs").style.height = width-30 + "px" ;	
	} else if (Math.random()<0.5){
		document.getElementById("designs").style.borderRadius = "35%";
		document.getElementById("designs").style.height = width-20 + "px" ;	
	} else if (Math.random()<0.75){
		document.getElementById("designs").style.borderRadius = "0" ;
	}
	
	document.getElementById("designs").style.display = "block";

	startTime = new Date().getTime();

	document.getElementById("designs").style.backgroundColor = colorFiller();
	
	var checkForContinue = startTime - stopWatchTime ;
	if (checkForContinue >= 30000)
	{	
		alert("You Click " + counter + " times in 30 seconds."+"\nDo You Want To Continue. Click on Continue or Stop");
		stopWatchTime = new Date().getTime();;
		counter = 0;
		displayStatus(0,0);
		document.getElementById("designs").style.display = "none";

		document.getElementById("checkForContinue").style.display = "block";

		
	}
}

function colorFiller(){
	var character = "0123456789ABCDEF".split("");
	var fillColor = "#";
	for(var i =0; i<6; i++) {
		fillColor += character[Math.floor(Math.random()*16)];		
	}
	return fillColor;	
}
  
function sizeShifting() {
	if ( window.innerWidth < 270) { 
  document.getElementById("fontChange").style.fontSize = "large";
  } else if ( window.innerWidth < 680) { 
  document.getElementById("fontChange").style.fontSize = "x-large";
  } else { 
  document.getElementById("fontChange").style.fontSize = "xx-large";
  }	
}

}
function playOrNot(){
	var x = document.getElementsByName("playAgain");
    var i;
    var txt= "";
    for (i = 0; i < x.length; i++) {
    	if (x[i].checked == true){
        	txt = txt + x[i].value;
    	}
     }
    if(txt == 0){
    	document.getElementById("checkForContinue").style.display = "none";
    	alert("ThankYou For Playing");

    }
    else if(txt==1){
    	location.reload();
    }
}
