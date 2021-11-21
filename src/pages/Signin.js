import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"
import { signin } from "../api/auth"
import { LOCAL_USER_STATE_KEY } from "../constants"
import { setUser } from "../state/slices/userSlice"

const Signin = () => {
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const loggedin = useSelector(state=>state.user.username)
    const dispatch = useDispatch()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!username) {
            setError("Username required")
            return
        } else {
            setLoading(true)
            setError("")
            const m = await signin(username)
            if (!m.error) {
                dispatch(setUser({ username }))
                localStorage.setItem(LOCAL_USER_STATE_KEY, username)
            } else {
                setError(m.error)
            }
            setLoading(false)

        }

    }
    if(loggedin) return <Navigate to='/' />
    return (
        <div className="signin-page">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Enter username here</label>
                <input
                    type="text" id="username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
                <button disabled={loading}>Sign in</button>
            </form>
            <div className="error-txt">{error}</div>
            <Link to='/signup'>New? Signup here</Link>
        </div>
    )
}

export { Signin }