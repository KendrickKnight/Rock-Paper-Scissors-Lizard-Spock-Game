
const yourScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const condition = document.getElementById('condition')

const playerAction = document.getElementById('player-action')
const computerAction = document.getElementById('computer-action')

// the idea is that we have a set of rules that states
// what beats what. if enemy's choice is in player's 
// choice's beats then the player wins. otherwise it ties 
// or player loses
const rules = [
    {
        name : 'rock',
        beats: ['scissors','lizard']
    },
    {
        name : 'paper',
        beats: ['rock','spock']
    },
    {
        name : 'scissors',
        beats: ['paper','lizard']
    },
    {
        name : 'lizard',
        beats: ['paper','spock']
    },
    {
        name : 'spock',
        beats: ['scissors','rock']
    }
]

function enemy() {
    return Math.floor(Math.random()*rules.length)
}


function compare(input) {
    // says who wins and who loses
    let playerChoice = rules.find(data => data.name === input)
    const enemyChoice = rules[enemy()].name
    if (enemyChoice === playerChoice.name){
        condition.textContent = 'Tied'
    } else if (enemyChoice === playerChoice.beats[0] || enemyChoice === playerChoice.beats[1]) {
        condition.textContent = 'You Win!'
        yourScore.textContent = parseInt(yourScore.innerHTML) + 1
    } else { 
        condition.textContent = 'You Lose D:'
        computerScore.textContent = parseInt(computerScore.innerHTML) + 1
    }


    // Adds each player's choice to the page
    const e = document.createElement('p')
    e.innerHTML = enemyChoice
    computerAction.appendChild(e)

    const p = document.createElement('p')
    p.innerHTML = playerChoice.name
    playerAction.appendChild(p)

    // TODO :
        // Instead of just text, make it add image
        // add an effect to show who is ahead
        // style a bit
}

