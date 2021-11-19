import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_GAME_STATE_KEY } from '../../constants';
import { chooseNCardsOutOfMCards } from '../utils';

let initialState;
(() => {
    const savedState = localStorage.getItem(LOCAL_GAME_STATE_KEY)
    if (savedState) {
        initialState = JSON.parse(savedState)
    } else {
        initialState = {
            deck: chooseNCardsOutOfMCards(),
            lives: 0,
            lastChosenCard: undefined,
            takenOutCards: [],
            isSavedState: false
        }
    }
})()
const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        fillCardsRandomly(state) {
            state.deck = chooseNCardsOutOfMCards()
        },
        takeTopCard(state) {
            state.lastChosenCard = state.deck.pop()
            state.takenOutCards.push(state.lastChosenCard)
        },
        increaseLive(state) {
            state.lives++
        },
        descreaseLive(state) {
            state.lives--
        },
        resetGame() {
            return { deck: chooseNCardsOutOfMCards(), lives: 0, lastChosenCard: undefined, takenOutCards: [], isSavedState:false }
            //state.deck = chooseNCardsOutOfMCards()
        }

    }
})

export const { descreaseLive, fillCardsRandomly, increaseLive, takeTopCard, resetGame } = deckSlice.actions

export default deckSlice.reducer

