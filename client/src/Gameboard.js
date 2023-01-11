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

    // console.log(game)


    //making the tiles for the game right here
    //TODO: give them unique keys. 
    const tiles =  game.map((tile, index) => {
        return <div className='gametile' key={index}>{tile}</div>
    })
    console.log("hi", tiles)

    return (
        <div className="gameBoard">
            <div>I should probably put a navbar on here just for my peace of mind </div>
            <div> 
                <p>gameboard goes here</p>
                {tiles}
             </div>
        </div>
    )
}

export default GameBoard