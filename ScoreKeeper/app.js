const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

const play1 = prompt("Enter player1 name")
const play2 = prompt("Enter player2 name")

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score >= winningScore && player.score - opponent.score >= 2) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
    if(isGameOver){
        setTimeout(() => {
            alert(`${play1} won the game`)
        },50)
    }
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
    if(isGameOver){
        setTimeout(() => {
            alert(`${play2} won the game`)
        },50)
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
