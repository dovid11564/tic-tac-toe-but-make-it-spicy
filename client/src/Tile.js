import React, { useState } from "react"

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
        boards

    }) {




    //chett said something about  having three possible states for a tile i.e. null, x, o 





    const compareArrays = () => {
        for (let eachWinningBoard of boards) {
            // eachWinningBoard.includes
            console.log(eachWinningBoard.includes(usersMoves))
        }
    }

    //TODO: state that handles player making a move
    const [empty, setEmpty] = useState(true)

    //function that handles player making a move
    function handleClick() {

        //when the player clicks on a tile, this is what happens 

        //the state for the turn is switched to computer turn. 
        //this was turned off for testing purposes
        // setPlayersTurn(false)
        // console.log(playersTurn)


        //the state for the tile clicked is switched from empty to full
        setEmpty(false)

        //the id of the tile that was clicked is added to an state that contains an array of the user's moves
        setUsersMoves([...usersMoves, `${tileid}`])
        // console.log(usersMoves)

        //the array of the user's moves is compared against a state that contains all the winning boards
        compareArrays()
        //if the user has a winning board, commence win/loss/tie state

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
                <div className={`${playersTurn ? "" : "un"}clickable`} id={`tile-number-${tileid}`} onClick={handleClick}>{tile}
                </div>
            </div>
        </div>

    )
}

export default Tile