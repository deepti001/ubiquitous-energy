var startTime = new Date().getTime();
var stopWatchTime = new Date().getTime();
var counter = 0;

window.onresize = sizeShifting;

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
		setTimeout(designShape,Math.random()*200);
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
	if (checkForContinue >= 5000)
	{	
		alert("You Click " + counter + " times in 30 seconds."+"\nDo You Want To Continue. Click on Continue or Stop");
		stopWatchTime = startTime;
		counter = 0;
		displayStatus(0,0);
		document.getElementById("designs").style.display = "none";
		//window.location = "continueOrStopWebPage.html";
		window.open("continueOrStopWebPage.html");
		
		//displayButtonToContinueOrStop();
	}
}
/*
function displayButtonToContinueOrStop(){
	  
		var bodyE = document.getElementById("CoS");
			
		bodyE.innerHTML = "<h2> Click Continue Or Stop </h2>";
		bodyE.innerHTML = "<div id='continueOrStop'> </div>";
		document.getElementById("continueOrStop").innerHTML = "<div id='idContinue'> </div>  <div id='idStop'> </div> ";
	
	
		var btnS = document.createElement("BUTTON");
		var tSNode = document.createTextNode("Stop");
		btnS.appendChild(tSNode);
		var designsDiv = document.getElementById("idStop");
		designsDiv.appendChild(btnS);
		
		var btnC = document.createElement("BUTTON");
		var tCNode = document.createTextNode("Continue");
		btnC.appendChild(tCNode);
		var designsDiv = document.getElementById("idContinue");
		designsDiv.appendChild(btnC);
	
}
*/
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