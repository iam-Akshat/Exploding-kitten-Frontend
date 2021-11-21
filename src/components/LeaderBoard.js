import { useEffect, useState } from "react"
import { getTopScores } from "../api/getTopScores"

const LeaderBoard = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timerId = setInterval(() => {
            (async () => {
                const scores = await getTopScores()
                setData(scores.topScorers)
                setLoading(false)
            })()
        }, 2000)
        return () => { clearInterval(timerId) }
    }, [])
    if (loading) return <div className="leaderboard">Loading...</div>
    return (
        <div className="leaderboard">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Score</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((scoreUser, idx) =>
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{scoreUser[1]}</td>
                            <td>{scoreUser[0]}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export { LeaderBoard }