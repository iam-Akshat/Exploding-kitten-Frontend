import { useEffect } from "react";
import { descreaseLive, increaseLive, resetGame } from '../state/slices/deckSlice'
const useGameLogic = (lastChosenCard, lives, dispatch, setGameStatus,takenOutCards) => {
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
        
    }, [lastChosenCard, dispatch,takenOutCards.length])
}

    // above line complaints not including lives
    // inlcuding lives will send it to infinite loop

export { useGameLogic }