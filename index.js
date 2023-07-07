for(i = 10; i >= 1 ; i--){
let input = +prompt("Guess a number between 1 and 10");
let ranNum = Math.random();
let specialNum = Math.round(ranNum*10);


if(specialNum !== input){
   let newScore = i - 1;
   alert("try again " +`The correct answer was ${specialNum} ` + " only " + newScore + " attemps left");
   }


else{
     alert(`Congratulations! You guessed the correct answer ${input}!`);
}
}