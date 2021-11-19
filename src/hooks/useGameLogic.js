import { useEffect } from "react";
import { descreaseLive, increaseLive, resetGame } from '../state/slices/deckSlice'
const useGameLogic = (lastChosenCard, lives, dispatch, setGameStatus) => {
    useEffect(() => {
        if (!lastChosenCard) return;
        if (lastChosenCard === 'cat') {
            setGameStatus("Card Removed")
        };
        if (lastChosenCard === 'diffuse') {
            setGameStatus("Diffuse card, you get live")
            dispatch(increaseLive());
        }
        if (lastChosenCard === 'exploding') {
            if (lives > 0) {
                setGameStatus("Live saved you")
                dispatch(descreaseLive())
            } else {
                setGameStatus("Bomb Killed you")
                dispatch(resetGame())
            }
        };
        if (lastChosenCard === 'shuffle') {
            setGameStatus("Shuffle")
            dispatch(resetGame())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastChosenCard, dispatch])
}

    // above line complaints not including lives
    // inlcuding lives will send it to infinite loop

export { useGameLogic }