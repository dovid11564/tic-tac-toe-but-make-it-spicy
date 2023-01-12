import React, { useEffect, useState } from 'react'
import Tile from "./Tile.js"

function GameBoard() {

    //this is the state that holds the game board

    const [game, setGame] = useState([])

    //these are the states that house the users and computer's moves respectively
    const [usersMoves, setUsersMoves] = useState([])
    const [computersMoves, setComputersMoves] = useState([])

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

    return (
        <div className="gameBoard">
            <div>I should probably put a navbar on here just for my peace of mind </div>
            <div>
                <p>gameboard goes here</p>
                {game.map((tile, index) => {
                    return (

                        // {playersTurn ? <fieldset }
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
                        />


                    )
                })}

            </div>
        </div>
    )
}

export default GameBoard