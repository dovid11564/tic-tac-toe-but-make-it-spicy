import React, { useState } from "react"

function Tile({ key, tile, tileid }) {


    //TODO: state that handles player making a move
    const [empty, setEmpty] = useState(true)

    //function that handles player making a move
    function handleClick() {
        console.log(`tile number ${tileid} was clicked`)
        console.log(tileid)
    }


    return (

        <div>
            <div className='gametiles'>
                <div id={`tile-number-${tileid}`}  onClick={handleClick}>{tile}
                </div>
            </div>
        </div>

    )
}

export default Tile