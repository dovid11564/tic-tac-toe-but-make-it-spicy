import React, { useState, useEffect } from "react"
// import { Switch } from 'react-router-dom'

function Tile(
    {
        tile,
        tileid,
        setPlayersTurn,
        playersTurn,
        usersMoves,
        setUsersMoves,
        computersMoves,
        setComputersMoves,
        userBoards,
        computerBoards,
        setGame,
        game

    }) {

    const [isWInner, setIsWinner] = useState(false)
    //useEffect that tracks player turn 
    // useEffect(() => {
    //compares the human player's moves state against the board if user's move array is greater or equal to three
    // const compareArrays = () => {

    // if (playersTurn === true) {
    //     if (usersMoves.length >= 3 && playersTurn === true) {
    //         for (let i = 0; i < boards.length - 2; i++) {
    //             // for (let j = 0; j < usersMoves.length; j++) {
    //             //     if (usersMoves[j].includes(boards[i]) &&
    //             //         usersMoves[j].includes(boards[i + 1]) &&
    //             //         usersMoves[j].includes(boards[i + 2])) {
    //             //         console.log("user wins");
    //             //     }
    //             // }
    //             let boards = boards[i]
    //             let matches = 0 
    //             for (let j = 0; j < boards.length; j++) {
    //                 if (usersMoves.includes(boards[j])) {
    //                     matches++
    //                 }
    //         }
    //         if (matches === 3) { 
    //             setIsWinner(true)
    //             console.log("u won")
    //             break
    //         }
    //     }
    // }
    // } else if (playersTurn === false) {
    //     if (computersMoves.length >= 3 && playersTurn === false) {
    //         for (let i = 0; i < boards.length - 2; i++) {
    //             for (let j = 0; j < computersMoves.length; j++) {
    //                 if (computersMoves[j].includes(boards[i]) &&
    //                     computersMoves[j].includes(boards[i + 1]) &&
    //                     computersMoves[j].includes(boards[i + 2])) {
    //                     console.log("computer won");
    //                 }
    //             }
    //         }
    //     }
    // }

    // }
    // compareArrays()
    // }, [playersTurn, userBoards, computerBoards, computersMoves, setPlayersTurn, usersMoves])




    //TODO: state that handles player making a move
    const [empty, setEmpty] = useState(true)

    // WHO WON THE GAME STATE
    const [whoWon, setWhoWon] = useState(null)
    useEffect(() => {


        // console.log("usersmoves.legnth", usersMoves.length)
        console.log(usersMoves)

        // console.log("computerMoves.legnth", computersMoves.length)

    }, [usersMoves])


    useEffect(() => {
        console.log("who won?", whoWon)

    }, [isWInner]
    )
    //function that handles player making a move
    function handleClick() {

        //when the player clicks on a tile, this is what happens 

        //the state for the turn is switched to computer turn. 
        //if this is commented out, it is for testing purposes

        // playersTurn ? setUsersMoves([...usersMoves, tileid]) : setComputersMoves([...computersMoves, tileid])


        // console.log("usersMoves", usersMoves)
        // console.log("computersMoves", computersMoves)
        // console.log("game", game)
        // console.log("users boards", userBoards)
        // console.log("computerboards", computerBoards)
        // console.log("setting plyers turn, yo")
        // console.log("usersMoves =", usersMoves)
        // console.log("computersMoves = ", computersMoves)
        // console.log("is it the players turn?", playersTurn)

        // console.log("usersmoves.legnth", usersMoves.length)
        // console.log("computerMoves.legnth", computersMoves.length)

        if (playersTurn === true) {
            const updatedMoves = [...usersMoves, tileid]
            setUsersMoves([...usersMoves, tileid])
            console.log("players turn", playersTurn)
            let matches = 0;
            for (let i = 0; i < userBoards.length; i++) {
                let currentWinningBoard = userBoards[i];
                matches = 0;
                for (let j = 0; j < currentWinningBoard.length; j++) {
                    console.log("looping winning combination............")
                    // console.log(usersMoves)
                    if (updatedMoves.includes(currentWinningBoard[j])) {
                        matches++;
                        console.log("matching............")

                        console.log(updatedMoves.includes(currentWinningBoard[j]))
                        if (matches === 3) {
                            console.log("match found")
                            setIsWinner(true);
                            setWhoWon("Player 1")
                            return;
                        }
                    }
                }

            }
        } else if (playersTurn === false) {
            setComputersMoves([...computersMoves, tileid])
            console.log("computers turn", !playersTurn)
            let computerMatches = 0
            for (let i = 0; i < computerBoards.length; i++) {
                let currentWinningBoard = computerBoards[i]
                computerMatches = 0
                for (let j = 0; j < currentWinningBoard.length; j++) {
                    if (computersMoves.includes(currentWinningBoard[j])) {
                        computerMatches++
                    }
                }
                if (computerMatches === 3) {
                    setIsWinner(true)
                    setWhoWon("Computer")
                    return;
                }
            }
        }

        setPlayersTurn(!playersTurn)

        //the state for the tile clicked is switched from empty to full
        //chett said something about  having three possible states for a tile i.e. null, x, o 
        //I envision this as a function that checks the which turn it is via state, and then chanegs the inner html or something to x or o depending on the turn 
        //perhaps I update the game state or something?
        setEmpty(!empty)

        //commented out the line under this because it was fucking with the win check function
        // playersTurn ? game[tileid] = "X" : game[tileid] = "O"


        //the id of the tile that was clicked is added to an state that contains an array of the user's moves


        //the array of the user's moves is compared against a state that contains all the winning boards

        //if the user has a winning board, commence win/loss/tie state
        // (this is handled in the compareArrays() function)

        //else, "COMPUTER is thinking about their next move"
        //computer selects a previously unselected tile
        //the id of the tile that was clicked is added to an state that contains an array of the computer's moves
        //the array of the computer's moves is compared against a state that contains all the winning boards

        //if the computer has a winning board, commence win/loss/tie state 

        //else, swap player state (user is allowed to click again lol)



        //chett said something about  having three possible states for a tile i.e. null, x, o 
        console.log(`tile number ${tileid} was clicked`)
        console.log(tileid)
        console.log("is it my turn?", playersTurn)
    }


    return (


        // { playersTurn ? }
        <div>
            <div className='gametiles'>
                <div className={`${empty ? "" : "un"}clickable`} id={`tile-number-${tileid}`} onClick={handleClick}>{tile}

                </div>
            </div>
            {/* <div class="button-container" >

                        <button class="primary" >
                            "Click me!"
                        </button>

                    </div>  */}
        </div>

    )
}

export default Tile