import {configureStore} from '@reduxjs/toolkit'
import deckSlice from './slices/deckSlice'


export default configureStore({
    reducer:{
        deck: deckSlice
    }
})