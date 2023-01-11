import React, { useEffect, useState } from 'react'

function GameBoard() {

    //this is the state that holds the game board

    const [game, setGame] = useState([])

    //fetching the default game board
    useEffect(() => {
        fetch("/game")
            .then(response => response.json())
            .then(data => setGame(data))
    }, [])

    console.log(game)

    return (
        <div className="gameBoard">
            <div>I should probably put a navbar on here just for my peace of mind </div>
            <div> game goes here </div>
        </div>
    )
}

export default GameBoard