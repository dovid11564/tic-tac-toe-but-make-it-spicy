import { useEffect } from "react"
function WinningScreen({playersTurn }) {

    useEffect(() => {
    play()
    }, [])


    const play = function() {
        new Audio("https://drive.google.com/uc?id=1GF_hpPMDb1cXwk3hqCeekIi76Ia8k53q&export=download").play()
        setTimeout(() => {
            console.log("delayed for 5 seconds")
            new Audio("https://ia800200.us.archive.org/30/items/ShawtysLikeAMelody/shawtys_like_a_melody_in_my_head.mp3").play()
        }, 3500 )
    }

    // function shawtyLikeAMelody() {
    //     new Audio("https://ia800200.us.archive.org/30/items/ShawtysLikeAMelody/shawtys_like_a_melody_in_my_head.mp3").play()
    // }

    return (
        <div className='differentFlexDirection'>
        <div>{playersTurn ? "PLAYER 1 WON!" : "PLAYER 2 WON!"}</div>
        <iframe src="https://giphy.com/embed/l1K9Dcy7ww0CW3JHq" width="480" height="406" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <iframe src="https://giphy.com/embed/l1K9Dcy7ww0CW3JHq" width="480" height="406" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <iframe src="https://giphy.com/embed/l1K9Dcy7ww0CW3JHq" width="480" height="406" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}

export default WinningScreen