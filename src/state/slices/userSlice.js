import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_USER_STATE_KEY } from "../../constants";

const userSlice = createSlice({
    name: 'user',
    initialState: { username: localStorage.getItem(LOCAL_USER_STATE_KEY) },
    reducers: {
        setUser(state, action) {
            console.log(action);
            state.username = action.payload.username
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer