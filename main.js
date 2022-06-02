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
const playerTurnEl = document.querySelector('section.display > span')


 /*-- Event Listeners --*/
boardEl.addEventListener('click', handleBoardClick)

 
 
 
 /*-- Functions --*/
 
 function init() {
     board = [null, null, null,null, null, null, null, null, null]
    }
    
    function handleBoardClick(evt) {

            document.getElementById(evt.target.id).innerHTML = "X";
              console.log(evt.target.id);
          }
          
        
    // function handleClick(evt) {
    //     board[evt.target.id] = PLAYER_LOGIC[currentPlayer]
    //     gameboardEl[evt.target.id] = PLAYER_LOGIC[currentPlayer]
    //     currentPlayer *= -1
    // }
    
    init();
    
    // step 1 figure out how to get the ID of what cell was clicked. use event object (evt)
    // step 2 use that ID to update the boards state at the correct index. ids are like index numbers
    // step 3 change the null value to the players turn at the correct index
    // step 4 change the players turn (needs its own function)
    // step 5 call the render function to update the DOM after the state has been changed(needs its own function)