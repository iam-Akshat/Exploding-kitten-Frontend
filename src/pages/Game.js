import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deck } from '../components/Deck'
import { Card } from '../components/Card'
import { descreaseLive, fillCardsRandomly, increaseLive, resetGame } from '../state/slices/deckSlice'
import { LOCAL_GAME_STATE_KEY } from '../constants'
import { useTemporaryState } from '../hooks/useTemporaryState'
import { useGameLogic } from '../hooks/useGameLogic'

const Game = () => {
    const { deck, lastChosenCard, lives, takenOutCards } = useSelector((state) => state.deck)
    const [gameStatus,setGameStatus] = useTemporaryState("",1000)
    const dispatch = useDispatch()

    useGameLogic(lastChosenCard,lives,dispatch,setGameStatus)

    console.log(deck, lastChosenCard, lives, takenOutCards);
    // saving on each move
    // could also make an api call
    useEffect(() => {
        localStorage.setItem(LOCAL_GAME_STATE_KEY, JSON.stringify({ deck, lastChosenCard:undefined, lives, takenOutCards,isSavedState:true }))
    }, [deck, lastChosenCard, lives, takenOutCards])


    useEffect(()=>{
        
        if(deck.length === 0){
            if((lastChosenCard === 'exploding' && lives === 0) || lastChosenCard === 'shuffle'){
                //alert("you lost")
            }else{
                alert("You won")
            }
            
            dispatch(resetGame())
        }
    },[deck.length, dispatch, lastChosenCard, lives])
    return (
        <>
        <div className="game-status"><h1>{gameStatus}</h1></div>
            <div className="holder">
                <div className="available-cards-deck">
                    <h1>Available Cards</h1>
                    <Deck deck={deck} hiddenDeck={true} />
                </div>

                <div className="current-card-wrapper">
                    <h1>Chosen Card</h1>
                    <div className="current-card-holder">
                        {lastChosenCard ? <Card hidden={false} name={lastChosenCard} order={0} /> : 'Choose a card'}
                    </div>
                </div>
                <div className="taken-cards-deck">
                    <h1>Chosen cards</h1>
                    <Deck deck={takenOutCards.slice(0, takenOutCards.length - 1)} hiddenDeck={false} />
                </div>
            </div>
        </>
    )
}

export { Game }