import React, { useState } from "react"

function Tile({ tile, tileid, setPlayersTurn, playersTurn }) {

    //psuedocode for how a turn cycle works:

    //if turn is player, the player can click on a tile

    //when the player clicks on a tile, this is what happens 

    //the state for the turn is switched to computer turn. (e.prevent default on user clicks?)
    //the state for the tile clicked is switched from empty to full
    //the id of the tile that was clicked is added to an state that contains an array of the user's moves
    //the array of the user's moves is compared against a state that contains all the winning boards

    //if the user has a winning board, commence win/loss/tie state

    //else, "COMPUTER is thinking about their next move"
    //computer selects a previously unselected tile
    //the id of the tile that was clicked is added to an state that contains an array of the computer's moves
    //the array of the computer's moves is compared against a state that contains all the winning boards

    //if the computer has a winning board, commence win/loss/tie state 

    //else, swap player state (user is allowed to click again lol)











    //TODO: state that handles player making a move
    const [empty, setEmpty] = useState(true)

    //function that handles player making a move
    function handleClick() {
        console.log(`tile number ${tileid} was clicked`)
        console.log(tileid)
        setEmpty(false)
        setPlayersTurn(false)
        console.log(playersTurn)
    }


    return (


        // { playersTurn ? }
        <div>
            <div className='gametiles'>
                <div className={`${ playersTurn ? "" : "un"}clickable`} id={`tile-number-${tileid}`} onClick={handleClick}>{tile}
                </div>
            </div>
        </div>

    )
}

export default Tile