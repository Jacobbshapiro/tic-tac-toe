/*----- constants -----*/
const MAX_PLAYS = 9
const ALLOWED_GUESSES = ['X', 'O']
const PLAYER_LOGIC = {
    '1': 'X',
    '-1': 'O',
 }


/*----- app's state (variables) -----*/
let board, playersTurn


/*----- cached element references -----*/
const boardEl = document.getElementById('game-board')
const resetBtn =document.getElementById('reset')
let playerTurnEl = document.getElementById('player').innerHTML;


 /*-- Event Listeners --*/
boardEl.addEventListener('click', handleBoardClick)

resetBtn.addEventListener('click', resetGame) 
 
 
 /*-- Functions --*/
 
 function init() {
     board = [null, null, null,null, null, null, null, null, null]
    }
    
    function handleBoardClick(evt) {
        if (board[evt.target.id]===null) {
            document.getElementById(evt.target.id).innerHTML = playerTurnEl;
            board[evt.target.id] = true;
            if (playerTurnEl === "X") {
                document.getElementById('player').innerHTML = "O";
                playerTurnEl = "O";
            } else {
                document.getElementById('player').innerHTML = "X"
                playerTurnEl = "X";
            }
        }
    }
function resetGame(){
    location.reload()
}


    init();
    