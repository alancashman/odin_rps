function computerPlay() {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return 'rock'
    } else if (num === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }

}


const playerSelection = 'rock'

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'
    ) {
        return `It's a draw!  You selected ${playerSelection} and the computer selected ${computerSelection}.`
    } else if (
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'
    ) {
        return `You lose!  You selected ${playerSelection} and the computer selected ${computerSelection}.`
    } else if (
        playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'
    ) {
        return `You win!  You selected ${playerSelection} and the computer selected ${computerSelection}.`
    } else {
        return `Invalid selection!`
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Choose your weapon!`);
        const computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        console.log(outcome)
        if (outcome === `You lose!  You selected ${playerSelection} and the computer selected ${computerSelection}.`) {
            computerScore++;
        } else if (outcome === `You win!  You selected ${playerSelection} and the computer selected ${computerSelection}.`) {
            playerScore++;
        }
        console.log(`The score is ${playerScore} to ${computerScore}.`)
    }
    if (playerScore > computerScore) {
        console.log(`You win!  The score was ${playerScore} to ${computerScore}.`)
    } else if (computerScore > playerScore) {
        console.log(`You lose!  The score was ${playerScore} to ${computerScore}.`)
    }
}

game()
