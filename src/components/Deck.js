import { useDispatch } from "react-redux"
import { takeTopCard } from "../state/slices/deckSlice"
import { Card } from "./Card"

const Deck = ({deck,hiddenDeck}) => {
    const dispatch = useDispatch()
    const handleTakeCard = () =>{
        if(deck.length === 0) return;
        dispatch(takeTopCard())
    }
    return (
        <div className="deck" onClick={handleTakeCard}>
            {deck.map((card,idx)=><Card name={card} order={idx} hidden={hiddenDeck} key={idx}/>)}
        </div>
    )
}

export { Deck }