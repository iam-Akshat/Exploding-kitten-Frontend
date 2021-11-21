import { BASE_URL } from "../constants"

const postUserScore = async (username) =>{
    const rawData = await fetch(`${BASE_URL}/leaderboard`,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify({username})
    })
    return await rawData.json()
}

export {postUserScore}