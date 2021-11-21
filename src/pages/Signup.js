import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"
import { signup } from "../api/auth"
import { LOCAL_USER_STATE_KEY } from "../constants"
import { setUser } from "../state/slices/userSlice"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const loggedin = useSelector(state=>state.user.username)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!username) {
            setError("Username required")
            return
        } else {
            setLoading(true)
            setError("")
            const m = await signup(username)
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
        <div className="signup-page">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Enter username here</label>
                <input
                    type="text" id="username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
                <button disabled={loading}>Sign in</button>
            </form>
            <div className="error-txt">{error}</div>
            <Link to='/signin'>Already have an account?</Link>
        </div>
    )
}

export { Signup }