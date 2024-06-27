import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cartSlice'

export default configureStore({
    reducer: {
        cart_items: cardSlice,
    },
})