let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const you = document.getElementById("you");
const computer = document.getElementById("computer");

const genCompChoice =()=>{
        const options = ["rock","paper","scissors"];
        const idx = Math.floor(Math.random()*3);
        return options[idx];
};

const userWon = (userChoice,compChoice)=>{
    you.innerText = ++userScore;
    msg.innerText = `${userChoice} beats ${compChoice} You Won  :)  !!! `;
}
const compWon = (userChoice,compChoice)=>{
    computer.innerText = ++compScore;
    msg.innerText = `${userChoice} beats ${compChoice} Computer Won :( `;
}
const drawGame =(userChoice)=>{
    msg.innerText=`You both choose ${userChoice} it's a Draw`;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userWon(userChoice,compChoice);
    }
    else{
        compWon(userChoice,compChoice);
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    console.log(userChoice," ",compChoice," ",userScore," ",compScore );

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else {
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }    
        
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

