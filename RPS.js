let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = ()=>{ //3.
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3); //random choice  in form of array 3.
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       // console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`; //6.
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
      //  console.log("you lose");
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`; //6.
        msg.style.backgroundColor="red";
    }
}

const drawGame =() =>{
  //  console.log("game was draw ");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="black";
}

const playGame=(userChoice) =>{ //generate user choice 2.
    console.log("user choice=",userChoice);
    const compChoice= genCompChoice(); //3.
    console.log("comp choice=",compChoice);

    if(userChoice == compChoice){ // fight 4.
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            // comp choice is either scissor or paper
            userWin= compChoice=="paper"? false : true;
        }
        else if(userChoice=="paper"){
            //comp choice is either rock or scissor
            userWin= compChoice=="scissor"? false : true;
        }
        else{
            //comp choice is rock or paper
            userWin= compChoice=="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice); //5. userWin gets updated if it wins else compScore gets updated.
    }              //userChoice,compChoice also gets displayed as stored in 6.
    
}  
// one function does one work => modular programming

choices.forEach((choice) =>{ //1.
    //console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
     //   console.log("choice was clicked",userChoice);
        playGame(userChoice);

    })
})




