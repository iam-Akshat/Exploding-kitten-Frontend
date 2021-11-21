import {configureStore} from '@reduxjs/toolkit'
import deckSlice from './slices/deckSlice'
import userSlice from './slices/userSlice'


export default configureStore({
    reducer:{
        deck: deckSlice,
        user: userSlice
    }
})