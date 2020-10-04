var timeP = 0;
var value = 1;
var upgradeC = 100;
		    
function btn() {
  timeP += value;
		        
  document.getElementById("num").innerHTML = timeP;
}
function upgrade() {
  if(timeP > upgradeC){
	  timeP -= upgradeC;
		value += value * 2;
		upgradeC += upgradeC * 2;
		document.getElementById("Cost").innerHTML = upgradeC;
  }
  else if(timeP < upgradeC){
		 document.getElementById("letter").style.display = block;
	}   
};  
