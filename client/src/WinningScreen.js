import { useEffect } from "react"
function WinningScreen({playersTurn }) {

    useEffect(() => {
    play()
    }, [])


    const play = function() {
        new Audio("https://drive.google.com/uc?id=1GF_hpPMDb1cXwk3hqCeekIi76Ia8k53q&export=download").play()
    }


    return (
        <>
        <div>{playersTurn ? "PLAYER 1 WON!" : "PLAYER 2 WON!"}</div>
        <iframe src="https://giphy.com/embed/l1K9Dcy7ww0CW3JHq" width="480" height="406" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactionseditor-dancing-hot-dog-l1K9Dcy7ww0CW3JHq"></a></p>
        </>
    )
}

export default WinningScreen