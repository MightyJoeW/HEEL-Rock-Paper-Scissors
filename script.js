const loses = 0;
const wins = 0;

const play = (userChoice) => {

    document.getElementById("player").innerHTML="";
    document.getElementById("opponent").innerHTML="";
    document.getElementById("results").innerHTML="";


    (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") ?
        document.getElementById("player").innerHTML='You chose ' + userChoice + '.' :
        document.getElementById("player").innerHTML="That is not a valid choice. Try again, jabroni!" :
        return false;
    

const computerChoice = Math.random();

(computerChoice < 0.34) ?
   computerChoice = "rock":
(computerChoice <= 0.67) ?
   computerChoice = "paper" :
   computerChoice = "scissors";


document.getElementById("opponent").innerHTML='// `Your opponent chose ${computerChoice}.`

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("We don't end in ties around here. Choose again, jabroni!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            loses++;
            return("IT DOESN'T MATTER if you chose rock! Computer will take their scissors, shine them up real nice, turn them sideways, and stick them straight up your fake rock!");
        }
        else {
            loses++;
            return("How dare you deem yourself worthy enough to choose rock! Computer laid the smackdown with paper! You lose...");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            loses++;
            return("IT DOESN'T MATTER if computer chose rock and you chose paper! You still lose.");
        }
        else {
            loses++;
            return("You've been checked into Smackdown Hotel. You LOSE!");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            loses++;
            return("Computer smelled what rock was cooking which results in a Rock Bottom AND People's Elbow. 1-2-3. YOU LOSE!");
        }
        else {
            loses++;
            return("Since you decided NOT to smell what rock was cooking, you still LOSE!");
        }
    }
};

var winner = compare(userChoice,computerChoice);
document.getElementById("results").innerHTML=winner;
document.getElementById("wins").innerHTML=wins;
document.getElementById("loses").innerHTML=loses;

if (wins > 99 || loses > 99) {
    document.getElementById("wins").style.fontSize="44";
    document.getElementById("loses").style.fontSize="44";
}
if (wins > 999) {
    alert("You reached the max score of 999. <br />Congratulations, you are the new People's Champion.");
}
if (loses > 999) {
    alert("Your opponent reached the max score of 999. <br />You ought to be ashamed of yourself, jobber...");
}
};

var reset = function() {
    loses = 0;
    wins = 0;
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("loses").innerHTML=loses;
};
