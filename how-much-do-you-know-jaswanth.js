const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgHex('cad315')(' Hey there! This quiz decides how well you know JASWANTH '));

//reading player's name
var playerName = (readlineSync.question((chalk.bold.hex('d37815')("Enter your name : ")))).toUpperCase();

//initailize playerScore
var playerScore = 0;
console.log(chalk.bold.hex('0278ae')(`Hey ${playerName}, happy to see you here `));

var questionCount = 1;

//players object
var players = 
{
'Harsha    ':-3,
'Ajay      ':14,
'Jaikar    ':27,
'Mahesh    ':3,
'Ratan     ':37,
'Veerendra ':23,
'Keerthana ':20,
'Mani      ':-10,
'Balaji    ':13,
'Sai teja  ':29,
'NAV       ':40,
'Dhanush   ':18, 
}

//initializing quizes
const basic = [
    {
      q: "What is my surname?",
      crt: "padala"
    },
    
    {
      q: "What is my major health issue since childhood?",
      crt: "asthma"
    },
    
	{
      q: "In which standard I had a foot injury?(enter number)",
      crt: "2"
    },
	{
      q: "What is my native place?",
      crt: "mahendrawada"
    },
	{
      q: "Where I have been living till my 1st standard?",
      crt: "ravulapalem"
    }
]

const intermediate = [
	{
      q: "What is my sister's name in school?(not own sister)",
      crt: "bala subhadra"
    },
	{
		q:"How many programming blogs did I posted?",
		crt:"1"
	},
	{
		q:"During which time I will be more productive? - (day or night)",
		crt:"day"
	},
	{
      q: "Which game do I used to play during my school?",
      crt: "vollyball"
    },
	{
      q: "In which class I have joined in the hostel?(number)",
      crt: "8"
    },
]

const advanced = [
	{
      q: "Am I 'emotional type' or 'Don't care type'?",
      crt: "both"
    },
	{
      q: "Who is my friend who doesn't know my birth date ? - (even after 8 years of friendship)",
      crt: "sai teja"
    },
	
	{
      q: "Who calls me by 'senior'?",
      crt: "vamshika"
    },
	{
      q: "What is my first crush full name(full name without surname)?",
      crt: "lasya charitha"
    },
	{
      q: "Are you answering quiz? - (yes or no)",
      crt: "yes"
    },
	
]

console.log(chalk.bold.bgHex('01c5c4')(" Let's start the quiz !!! "));
start();
function start(){
console.log(chalk.bold.bgHex('ffe05d')('\n LEVEL - 1'));

console.log(`${chalk.bold.bgHex('fd3a69')('\n KNOW THE RULES : ')}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     1. This level contains 5 quetions.")}\n`);
console.log(`${chalk.bold.hex('fecd1a')("     2. For each correct answer 2 points will be credited. ")}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     3. For each wrong answer 1 points will be debited. ")}\n`);


var returnScore = playQuiz(basic,2,1);

console.log(chalk.bold.bgHex('ffe05d')('\n LEVEL - 2 '));

console.log(`${chalk.bold.bgHex('fd3a69')('\n KNOW THE RULES : ')}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     1. This level contains 5 quetions.")}\n`);
console.log(`${chalk.bold.hex('fecd1a')("     2. For each correct answer 5 points will be credited. ")}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     3. For each wrong answer 2 points will be debited. ")}\n`);

returnScore = playQuiz(intermediate,5,2);

console.log(chalk.bold.bgHex('ffe05d')('\n LEVEL - 3 '));

console.log(`${chalk.bold.bgHex('fd3a69')('\n KNOW THE RULES : ')}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     1. This level contains 5 quetions.")}\n`);
console.log(`${chalk.bold.hex('fecd1a')("     2. For each correct answer 10 points will be credited. ")}\n`);

console.log(`${chalk.bold.hex('fecd1a')("     3. For each wrong answer 4 points will be debited. ")}\n`);


returnScore = playQuiz(advanced,10,4);
validate(returnScore,playerName);
}


function playQuiz(quizArray, increment, decrement){
  for (let i = 0; i < quizArray.length; i++) {
    console.log(`\n${questionCount++}. ${chalk.inverse.hex('ec5858')(quizArray[i].q)}`);
    var thisAnswer = readlineSync.question(chalk.hex("ccf6c8")("Answer: ")+" ");
   if (thisAnswer.toLowerCase() == quizArray[i].crt){ 
     playerScore += increment;
	    	   console.log(chalk.bold.green('Correct answer'));
	 	 console.log(chalk.bold.blue(`Current Score : ${playerScore}\n`));

   } 
   else{
	   playerScore -=decrement;
   	   console.log(chalk.bold.red('Wrong answer'));
	   console.log(chalk.bold.bgBlue(`Current Score : ${playerScore}\n`));
   }
   }
	return playerScore;
}

function validate(finalScore, playerName){
		let ok = Object.keys(players);
	var maxi = 0;
	for(let i=0;i<ok.length;i++){
		let na = ok[i];
		if(players[na] < finalScore){
			maxi++;
	}
	}
	if (maxi==ok.length){
      
		console.log(chalk.bold.green(`\n YOUR SCORE - ${finalScore}`));

	  console.log(chalk.bold.hex('28df25')("\n Screenshot your score, I will add you to the MY ❤ "));
	}
   else{ 
   console.log(` ${chalk.bold.red(`\n 🤨🤨🤨 YOUR SCORE IS : `)} ${chalk.bold.bgRed(" "+finalScore+" ")} \n`);

   }
   if(finalScore >= 35){
	   console.log(chalk.bold.bgGreen(` YOU KNOW ME VERY WELL THAN ALL OTHERS ZING ZING YOU ARE AMAZING`+"😍😍😍 "));
   }
   else if(finalScore >= 10 && finalScore < 35){
	   console.log(chalk.bold.bgGreen(` YOU KNOW ME GOOD ENOUGH 😉😉😉 `));
   }
   else{
	   console.log(chalk.bold.bgGreen(` YOU DON'T KNOW ME BAD ENOUGH 😜😜😜 `));
   }

   players[`${playerName}`]= finalScore;
showLeader();

}
   

function showLeader(){
let ok = Object.keys(players);
let okvalue = [];
ok.forEach(key => {
	okvalue.push(players[key]);
})
var newPlayers={};
okvalue.sort(function(a, b){return b-a});
okvalue.forEach(each => {
	for(let eachKey=0; eachKey<ok.length;eachKey++){
		let o=ok[eachKey];
		if(players[o] == each){
			newPlayers[o] = each;
			players[o] = 1000;
			break;
		}
	}
})



console.log(chalk.bold.bgHex('52057b')('\n --- L E A D E R   B O A R D --- '));

let newok = Object.keys(newPlayers);

for(let i=0;i<newok.length;i++){	
	let na = newok[i];
	console.log(`${chalk.bold.bgHex('495464')(` ${na} :: ${newPlayers[na]} `)}`);
}
		if(readlineSync.question(`${chalk.bold.yellow('\n Do you want to try again?(yes or no) ')}`).toLowerCase() == 'yes'){
		start();
		}
		else{

		console.log(chalk.bold.hex('03c4a1')(" \nI am very happy that you have played the quiz. "))
		console.log(chalk.bold.hex('03c4a1')("\nDon't forget to share on twitter or linkedin. Don't forget to tag me."));
		console.log(chalk.bold.hex('28df25')("\n Screenshot your score and send me."));
		console.log(chalk.bold.bgHex('6a2c70')("\n ----- KEEP LEARNING, KEEP SHARING----- "));

		}
}