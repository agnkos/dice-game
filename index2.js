let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1clicks = 0;
let player2clicks = 0;

const playerOneScore = document.getElementById('player1Scoreboard')
const playerTwoScore = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const doubleBtn = document.getElementById('doubleBtn')
const doubleMessage = document.getElementById('double-message')
const cowBtn = document.getElementById('cowBtn')
const cowMessage = document.getElementById('cow-message')
const cow = document.getElementById('cow')


rollBtn.addEventListener('click', playGame)

let doubleNum;

function playGame() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    cowMessage.textContent = "(75% chance to reset opponents' points!)";
    doubleMessage.textContent = '(50% chance to double dice points!)';


    if (player1Turn) {

        if (doubleNum == 1) {
            console.log(doubleNum)
            player1Score += (randomNumber * 2);
            doubleMessage.innerHTML = 'Double points for Player 1!'
            doubleNum = 5;
        }
        else if (doubleNum == 0) {
            console.log(doubleNum)
            player1Score += 0;
            randomNumber = 0;
            doubleMessage.innerHTML = 'No extra points for Player 1!'
            doubleNum = 5;
        }
        else {
            doubleMessage.innerHTML = '';
            player1Score += randomNumber;
            doubleMessage.textContent = '(50% chance to double dice points!)';
        }
        player1Dice.textContent = randomNumber;
        playerOneScore.textContent = player1Score;
        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
        message.textContent = 'Player 2 turn';
        player1clicks++

    } else {

        if (doubleNum == 1) {
            console.log(doubleNum)
            player2Score += (randomNumber * 2);
            doubleMessage.innerHTML = 'Double points for Player 2!'
        }
        else if (doubleNum == 0) {
            player2Score += 0;
            randomNumber = 0;
            doubleMessage.innerHTML = 'No extra points for Player 2!'
        }
        else {
            doubleMessage.innerHTML = '';
            player2Score += randomNumber;
            doubleMessage.textContent = '(50% chance to double dice points!)';
        }
        player2Dice.textContent = randomNumber;
        playerTwoScore.textContent = player2Score;
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
        message.textContent = 'Player 1 turn';
        player2clicks++
    }
    player1Turn = !player1Turn

    if (player1Score >= 20 && (player1clicks == player2clicks)) {
        message.textContent = 'Player 1 wins! 🥳';
        changeBtn();
    } else if (player2Score >= 20 && (player1clicks == player2clicks)) {
        message.textContent = 'Player 2 wins! 🎉';
        changeBtn();
    }
}

function changeBtn() {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    doubleBtn.disabled = 'true';
    cowBtn.disabled = 'true';
}

resetBtn.addEventListener('click', resetGame);

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1clicks = 0;
    player2clicks = 0;
    message.textContent = 'Player 1 turn';
    doubleMessage.textContent = '(50% chance to double dice points!)';
    cowMessage.textContent = "(75% chance to reset opponents' points!)";
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    rollBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
    doubleBtn.disabled = false;
    cowBtn.disabled = false;
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
}

doubleBtn.addEventListener('click', doubleOrNothing);

function doubleOrNothing() {
    doubleNum = Math.round(Math.random());
    playGame();
}

cowBtn.addEventListener('click', flyingCow);

function flyingCow() {
    if (cow.className == 'animation-right') {
        cow.classList.remove('animation-right');
        cow.classList.add('animation-left')
    } else if (cow.className == 'animation-left') {
        cow.classList.remove('animation-left');
        cow.classList.add('animation-right')
    } else {
        cow.classList.add('animation-right');
    }
    const cowNumber = Math.floor(Math.random() * 4 + 1);
    console.log(cowNumber)
    if (player1Turn) {
        if (cowNumber <= 3) {
            player2Score = 0;
            playerTwoScore.textContent = player2Score
            cowMessage.textContent = 'Oh no, Flying Cow ate Player 2 points!'
        } else {
            player1Score = 0;
            playerOneScore.textContent = player2Score
            cowMessage.textContent = 'Ups! Flying Cow ate Player 1 points!'
        }

        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
        message.textContent = 'Player 2 turn';
        player1clicks++

    } else {
        if (cowNumber <= 3) {
            player1Score = 0;
            playerOneScore.textContent = player1Score
            cowMessage.textContent = 'Oh no, Flying Cow ate Player 1 points!'
        } else {
            player2Score = 0;
            playerTwoScore.textContent = player2Score
            cowMessage.textContent = 'Ups! Flying Cow ate Player 2 points!'
        }
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
        message.textContent = 'Player 1 turn';
        player2clicks++
    }
    player1Turn = !player1Turn
}


