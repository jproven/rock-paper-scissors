document.addEventListener("DOMContentLoaded", function() {
    let playerScore = 0;
    let computerScore = 0;
    const playerScore_span = document.getElementById("player-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".scoreboard");
    const result_p = document.querySelector(".result > p");
    const rock_div = document.getElementById("rock");
    const paper_div = document.getElementById("paper");
    const scissors_div = document.getElementById("scissors");

    function convertToWord(choice) {
        if (choice === "rock") return "Rock";
        if (choice === "paper") return "Paper";
        if (choice === "scissors") return "Scissors";
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function win(playerChoice, computerChoice) {
        const smallUserWord = "(user)".fontsize(3).sub();
        const smallComputerWord = "(rival)".fontsize(3).sub();
        const playerChoice_div = document.getElementById(playerChoice);
        playerScore++;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(playerChoice)}${smallUserWord} beats ${computerChoice}${smallComputerWord}. You win!"`;
        playerChoice_div.classList.add('golden-glow');
        setTimeout(() => playerChoice_div.classList.remove('golden-glow'), 300)
    }

    function lose(playerChoice, computerChoice) {
        const smallUserWord = "(user)".fontsize(3).sub();
        const smallComputerWord = "(rival)".fontsize(3).sub();
        const playerChoice_div = document.getElementById(playerChoice);
        computerScore++;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(playerChoice)}${smallUserWord} loses to ${computerChoice}${smallComputerWord}. You lost..."`;
        playerChoice_div.classList.add('red-glow');
        setTimeout(() => playerChoice_div.classList.remove('red-glow'), 300)
    }

    function draw(playerChoice, computerChoice) {
        const smallUserWord = "(user)".fontsize(3).sub();
        const smallComputerWord = "(rival)".fontsize(3).sub();
        const playerChoice_div = document.getElementById(playerChoice);
        result_p.innerHTML = `${convertToWord(playerChoice)}${smallUserWord} equals ${computerChoice}${smallComputerWord}. It's a draw."`;
        playerChoice_div.classList.add('grey-glow');
        setTimeout(() => playerChoice_div.classList.remove('grey-glow'), 300)
    }

    function game(playerChoice) {
        const computerChoice = getComputerChoice();
        switch (playerChoice + computerChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(playerChoice, computerChoice);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(playerChoice, computerChoice);
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                draw(playerChoice, computerChoice);
                break;
        }
    }
    
    function main() {
        rock_div.addEventListener('click', () => game("rock"));

        paper_div.addEventListener('click', () => game("paper"));

        scissors_div.addEventListener('click', () => game("scissors"));
    }

    main();

});
