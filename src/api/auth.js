import { BASE_URL } from "../constants"


const auth = async (username, action = 'signin') => {
    const rawData = await fetch(`${BASE_URL}/auth/${action}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username })
    })
    return await rawData.json()
}
const signin = async (username) => {
    return auth(username)
}
const signup = async (username) => {
    return auth(username, 'signup')
}

export { signup, signin }