var userChoice = prompt("Do you choose rock, paper or scissors?");
// var userChoice = document.getElementById("playerOne").value;
var computerChoice = Math.random(); //Math.random() randomly picks a number 0-1
 
    if (computerChoice < 0.34) {
       computerChoice = "rock";
   } else if(computerChoice <= 0.67) {
       computerChoice = "paper";
   } else {
       computerChoice = "scissors";
   } document.write("You: " + userChoice + " vs. Computer: " + computerChoice + ". ");

   var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        document.write("We don't end in ties around here. Choose again, jabroni!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.write("IT DOESN'T MATTER if you chose rock! Computer will take their scissors, shine them up real nice, turn them sideways, and stick them straight up your fake rock!");
        }
        else {
            document.write("How dare you try to choose rock! Computer laid the smackdown with paper! You lose...");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.write("IT DOESN'T MATTER if computer chose rock and you chose paper! You still lose.");
        }
        else {
            document.write("Computer chose scissors which means you've been checked into Smackdown Hotel. You LOSE!");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.write("Computer chose rock which results in a Rock Bottom AND People's Elbow. 1-2-3. YOU LOSE!");
        }
        else {
            document.write("Computer chose Paper. Since neither of you smelled what rock was cooking, you BOTH LOSE. ");
        }
    }

};

compare(userChoice, computerChoice);