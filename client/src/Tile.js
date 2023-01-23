import React, { useState, useEffect } from "react"

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
        game,
        setIsOpen,
        isOpen
    }
) {

    //this just tracks to see if the game has been won
    const [isWInner, setIsWinner] = useState(false)

    // WHO WON THE GAME STATE
    const [whoWon, setWhoWon] = useState(null)

    //has the tile already been clicked state. 
    //when the tile's state is changed, it gets a different css class
    //which makes it unclickable
    const [empty, setEmpty] = useState(true)

    // useEffect(() => {
    //     // console.log("usersmoves.legnth", usersMoves.length)
    //     console.log(usersMoves)
    //     // console.log("computerMoves.legnth", computersMoves.length)
    // }, [usersMoves])

    useEffect(() => {
        console.log("who won?", whoWon)
    }, [isWInner]
    )

    //function that handles player making a move
    function handleClick() {
        // console.log("usersMoves", usersMoves)
        // console.log("computersMoves", computersMoves)
        // console.log("game", game)
        // console.log("users boards", userBoards)
        // console.log("computerboards", computerBoards)
        // console.log("usersMoves =", usersMoves)
        // console.log("computersMoves = ", computersMoves)
        // console.log("is it the players turn?", playersTurn)
        // console.log("usersmoves.legnth", usersMoves.length)
        // console.log("computerMoves.legnth", computersMoves.length)
        setEmpty(!empty)

        if (playersTurn === true) {
            const updatedMoves = [...usersMoves, tileid]
            //need the above variable to get around async
            setUsersMoves([...usersMoves, tileid])
            // console.log("players turn", playersTurn)
            let matches = 0;

            for (let i = 0; i < userBoards.length; i++) {
                let currentWinningBoard = userBoards[i];
                matches = 0;
                for (let j = 0; j < currentWinningBoard.length; j++) {
                    console.log("looping winning combination............")
                    console.log(usersMoves)
                    if (updatedMoves.includes(currentWinningBoard[j])) {
                        matches++;
                        console.log("matching............")

                        console.log(updatedMoves.includes(currentWinningBoard[j]))
                        if (matches === 3) {
                            console.log("player match found")
                            setIsWinner(true);
                            setWhoWon("Player 1")
                            setIsOpen(!isOpen)
                            return;
                        }
                    }
                }
            }
            //TODO: fix async on the computer's side
        } else if (playersTurn === false) {
            const updatedComputerMoves = [...computersMoves, tileid]
            setComputersMoves([...computersMoves, tileid])
            console.log("computers turn", !playersTurn)
            let computerMatches = 0
            for (let i = 0; i < computerBoards.length; i++) {
                let currentWinningBoard = computerBoards[i]
                computerMatches = 0
                for (let j = 0; j < currentWinningBoard.length; j++) {
                    if (updatedComputerMoves.includes(currentWinningBoard[j])) {
                        computerMatches++
                    }
                }
                if (computerMatches === 3) {
                    console.log("computer match found")
                    setIsWinner(true)
                    setWhoWon("Computer")
                    setIsOpen(!isOpen)
                    return;
                }
            }
        }



        //swap users turn AFTER the function runs so that it doesn't mess stuff up
        setPlayersTurn(!playersTurn)

        //set the inner HTML to reflect the move the user has made
        playersTurn ? game[tileid] = "X" : game[tileid] = "O"

        // else, "COMPUTER is thinking about their next move"

        console.log(`tile number ${tileid} was clicked`)
        console.log(tileid)
        console.log("is it my turn?", playersTurn)
    }

    return (

        <div className='grid-container'>
            <div
                className={`${empty ? "" : "un"}clickable grid-box gametiles`}
                id={`tile-number-${tileid}`}
                onClick={handleClick}
            >
                {tile}
            </div>
        </div>
    )
}

export default Tile