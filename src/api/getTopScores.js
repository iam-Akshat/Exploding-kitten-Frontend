import { BASE_URL } from "../constants"

const getTopScores = async (limit = 5) => {
    const rawData = await fetch(`${BASE_URL}/leaderboard?limit=${limit}`)
    const data = await rawData.json()
    return data
}

export { getTopScores }