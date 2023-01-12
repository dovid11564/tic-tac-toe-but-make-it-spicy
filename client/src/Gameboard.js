import React, { useEffect, useState } from 'react'
import Tile from "./Tile.js"

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

    // const tiles =  game.map((tile, index) => {
    //     return <div className='gametiles'><div id={`tile-number-${index}`} key={index} onClick={handleClick}>{tile}</div></div>
    // })
    // console.log("hi", tiles)

    return (
        <div className="gameBoard">
            <div>I should probably put a navbar on here just for my peace of mind </div>
            <div> 
                <p>gameboard goes here</p>
                {game.map((tile, index) => {
                    return( <Tile 
                        key={index}
                        tile={tile}
                        />
                    )
                })}
             </div>
        </div>
    )
}

export default GameBoard