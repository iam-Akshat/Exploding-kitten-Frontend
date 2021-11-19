import { useState } from "react"
const useTemporaryState = (initialState,stateTiming=500) =>{
    const [state,setState] = useState("")
    const [prevStateTimer,setPrevStateTimer] = useState()

    const setTemporaryState = (tempState) =>{
        setState(tempState);
        if(prevStateTimer) clearTimeout(prevStateTimer);

        const timerId = setTimeout(()=>{
            setState(initialState)
        },stateTiming)
        setPrevStateTimer(timerId)
    }  
    return [state,setTemporaryState]
}

export {useTemporaryState}