var hand = [];
var userHand = 0;
var computerHand = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareAnswersSwitch(userHand, computerHand){
	if(computerHand==userHand){
			alert("Its a draw, try again!");
		}
		else{
			switch(userHand) {
			case "rock":
				if(computerHand=="paper"){
					alert("CPU won!");
				}
				else if(computerHand=="scissors"){
					alert("User won!");
				}
				break;
			case "paper":
				if(computerHand=="rock"){
					alert("User won!");
				}
				else if(computerHand=="scissors"){
					alert("CPU won!");
				}
				break;
			case "scissors":
				if(computerHand=="paper"){
					alert("User won!");
				}
				else if(computerHand=="rock"){
					alert("CPU won!");
				}
				break;
			}
	}
}

do{
	var hand = ["rock","paper","scissors"];
	var userHand = prompt("Enter rock, paper, or scissors (stop to end)"); 
	var computerHand;
	if(userHand == "rock"){
		computerHand = hand[getRandomInt(0,2)]
		alert("CPU guess is: "+computerHand);	
	}
	else if(userHand == "paper"){
		computerHand = hand[getRandomInt(0,2)]
		alert("CPU guess is: "+computerHand);		
	}
	else if(userHand == "scissors"){
		computerHand = hand[getRandomInt(0,2)]
		alert("CPU guess is: "+computerHand);	
	}
	else if(userHand == "stop"){
		alert("Goodbye")
	}
	else{
		alert("Guess again");
	}
	compareAnswersSwitch(userHand, computerHand);
}
while(userHand != "stop"); 