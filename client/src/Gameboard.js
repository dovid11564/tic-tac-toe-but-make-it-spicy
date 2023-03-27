import React, { useEffect, useState } from 'react'
// import WinningScreen from './WinningScreen.js'
// import Tile from "./Tile.js"

function GameBoard() {

    //this is the state that holds the game board
    // const [game, setGame] = useState([])

    //these are the states that house the users and computer's moves respectively
    // const [usersMoves, setUsersMoves] = useState([])
    // const [computersMoves, setComputersMoves] = useState([])

    //this state houses an object that contains arrays with all of the possible winning boards
    // const [userBoards, setUserBoards] = useState([])
    // const [computerBoards,  setComputerBoards] = useState([])

    //this useEffect sets winning boards state on dom content loaded. 
    //I ended up doing this instead of grabbing them from a fetch because I had run into a database problem and it was simpler for me to handle the problem this way lol. 
    // useEffect(() => {
        // console.log("we are about to set winning boards!")
        // setUserBoards([
        //    [0, 1, 2],
        //    [3, 4, 5],
        //    [6, 7, 8],
        //    [0, 3, 6],
        //    [1, 4, 7],
        //    [2, 5, 8],
        //    [0, 4, 8],
        //    [2, 4, 6]
        // ])

    //     setComputerBoards([
    //        [0, 1, 2],
    //        [3, 4, 5],
    //        [6, 7, 8],
    //        [0, 3, 6],
    //        [1, 4, 7],
    //        [2, 5, 8],
    //        [0, 4, 8],
    //        [2, 4, 6]
    //     ])
    // }, [])

    //fetching the default game board
    // useEffect(() => {
    //     fetch("/game")
    //         .then(response => response.json())
    //         .then(data => setGame(data))
    // }, [])

    // console.log(game)
    //this is the state that controls which players turn it is. 

    // const [playersTurn, setPlayersTurn] = useState(true)

    //this ternary controls weather or not a user can click on a div. If it is not the player's turn, they cannot click on a div
    //(in the CSS, pointer-events: none;)
    // const [tileIsClickable, setTileIsClickable] = useState(false)


    let origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]


// useEffect(() => {
// 	const cells = document.querySelectorAll('.cell')
// }, [])
// const cells = document.querySelectorAll('.cell');

const [cells, setCells] = useState(document.querySelectorAll('.cell'))
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square) {
	if (typeof origBoard[square.target.id] == 'number') {
		turn(square.target.id, huPlayer)
		if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
	}
}

function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player)
	if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "blue" : "red";
	}
	for (let i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false);
	}
	declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
}

    function declareWinner(who) {
        document.querySelector(".endgame").style.display = "block";
        document.querySelector(".endgame .text").innerText = who;
    }

function emptySquares() {
	return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	return minimax(origBoard, aiPlayer).index;
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (let i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = "green";
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;
	}
	return false;
}

function minimax(newBoard, player) {
	let availSpots = emptySquares();

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	let moves = [];
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			let result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			let result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	let bestMove;
	if(player === aiPlayer) {
		let bestScore = -10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
    
    return (
        // tileIsClickable ? 
        // // <WinningScreen 
        // playersTurn={playersTurn}
        // />
        // :
        <>
        <br />
        <div id='smallText'>TIC-TAC-TOE</div>
        <br />
        <div>
        <table>
		<tr>
			<td class="cell" id="0"></td>
			<td class="cell" id="1"></td>
			<td class="cell" id="2"></td>
		</tr>
		<tr>
			<td class="cell" id="3"></td>
			<td class="cell" id="4"></td>
			<td class="cell" id="5"></td>
		</tr>
		<tr>
			<td class="cell" id="6"></td>
			<td class="cell" id="7"></td>
			<td class="cell" id="8"></td>
		</tr>
	</table>
	<div class="endgame">
		<div class="text"></div>
	</div>
	<button onClick="startGame()">Replay</button>

        </div>
             {/* <div className='grid-container'>
                {game.map((tile, index) => {
                    return (
                        <Tile
                            key={index}
                            tile={tile}
                            tileid={index}
                            setPlayersTurn={setPlayersTurn}
                            playersTurn={playersTurn}
                            usersMoves={usersMoves}
                            setUsersMoves={setUsersMoves}
                            computersMoves={computersMoves}
                            setComputersMoves={setComputersMoves}
                            userBoards={userBoards}
                            computerBoards={computerBoards}
                            setGame={setGame}
                            game={game}
                            setTileIsClickable={setTileIsClickable}
                            tileIsClickable={tileIsClickable}
                        />
                    )
                })}
            </div> */}
            <div id='alsoSmallText'>PLAYER 1: X | PLAYER 2: O</div>
        </>
    )
}

export default GameBoard