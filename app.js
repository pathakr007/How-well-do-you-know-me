var readlineSync=require('readline-sync')

var userName=readlineSync.question("Please enter your name:\n");

console.log("\n\nHi! "+userName+"\nWelcome to How well do you know Rakesh?\n")

var highScore={
  first:'\Rakesh scored 5\n',
  second:'Akshat scored 4\n'
}

var score=0;


var questionOne={
  question: "\nWhere is my hometown?\n",
  answer:"raipur"
}

var questionTwo={
  question:'\nWho is my favorite superhero?\n',
  answer:'batman',

}

var questionThree={
  question:"\nWhich is my favorite Singer?\n",
  answer:"Kishor Kumar"
}

var questionFour={
  question:"\nWhat is my dream company?\n",
  answer:"Google.inc"
}

var questionFive={
  question:"\nWhat is my favorite color?\n",
  answer:"Light Green"
}


var question=[questionOne,questionTwo,questionThree,questionFour,questionFive];

function play(question,answer){
    var userAns=readlineSync.question(question);
    if (userAns===answer){
      console.log("You are right!\n");
      score=score+1;
    }
    
    else{
      console.log('You are wrong!\n');
    }

    
  }
