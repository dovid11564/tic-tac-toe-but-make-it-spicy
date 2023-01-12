

function Tile({ index, tile }) {


//TODO: state that handles player making a move
function handleClick() {
    console.log("i am click")
}


    return (

        <div>
            <div className='gametiles'>
                <div id={`tile-number-${index}`} key={index} onClick={handleClick}>{tile}
                </div>
            </div>
        </div>

    )
}

export default Tile