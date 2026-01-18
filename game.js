let UserScore=0;
let ComputerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


 const generateComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    return options[randomIndex];
 }
 const drawGame=()=>{
    console.log("game was draw")
     msg.innerText="Game was Draw.Play Again! "
     msg.style.backgroundColor="black";
 }
 const showWinner=(userWin,userChoice,ComputerChoice)=>{
    if(userWin){
        UserScore++;
        userScorePara.innerText=UserScore;
        console.log("you won!");
        msg.innerText=`You Win! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor="Green";
    } else{
        ComputerScore++;
        computerScorePara.innerText=ComputerScore;
        console.log("you lose");
         msg.innerText=`You lost. ${ComputerChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="Red";
    }
 }

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
    const ComputerChoice=generateComputerChoice();
     console.log("computer choice=",ComputerChoice)
     if(userChoice===ComputerChoice){
     drawGame();
     } else{
        let userWin=true;
        if(userChoice==="rock"){
          userWin = ComputerChoice==="paper"? false:true;
        } else if(userChoice==="paper"){
           userWin=  ComputerChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin=ComputerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,ComputerChoice);
     } 
};
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
 })