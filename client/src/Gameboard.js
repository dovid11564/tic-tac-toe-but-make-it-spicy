import React, { useEffect, useState } from 'react'
import WinningScreen from './WinningScreen.js'
import Tile from "./Tile.js"

function GameBoard() {

    //this is the state that holds the game board

    const [game, setGame] = useState([])

    //these are the states that house the users and computer's moves respectively
    const [usersMoves, setUsersMoves] = useState([])
    const [computersMoves, setComputersMoves] = useState([])

    //this state houses an object that contains arrays with all of the possible winning boards
    const [userBoards, setUserBoards] = useState([])
    const [computerBoards,  setComputerBoards] = useState([])

    //this useEffect sets winning boards state on dom content loaded. 
    //I ended up doing this instead of grabbing them from a fetch because I had run into a database problem and it was simpler for me to handle the problem this way lol. 
    useEffect(() => {
        console.log("we are about to set winning boards!")
        setUserBoards([
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
        ])

        setComputerBoards([
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
        ])
    
    }, [])

    //fetching the default game board
    useEffect(() => {
        fetch("/game")
            .then(response => response.json())
            .then(data => setGame(data))
    }, [])

    // console.log(game)
    //this is the state that controls which players turn it is. 

    const [playersTurn, setPlayersTurn] = useState(true)

    //this ternary controls weather or not a user can click on a div. If it is not the player's turn, they cannot click on a div
    //(in the CSS, pointer-events: none;)
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        isOpen ? 
        <WinningScreen 
        playersTurn={playersTurn}
        />
        :
        <>
        <br />
        <div id='smallText'>TIC-TAC-TOE</div>
        <br />
             <div className='grid-container'>

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
                            setIsOpen={setIsOpen}
                            isOpen={isOpen}
                        />
                        
                    )
                })}
            </div>
          
            <div id='alsoSmallText'>PLAYER 1: X | PLAYER 2: O</div>
        </>
    )
}

export default GameBoard