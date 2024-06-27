import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart_items',
    initialState: [],

    reducers: {
        addToCard: (state, action) => {
            const existingItem = state.find(item => item.laptopId === action.payload.laptopId && item.size === action.payload.size);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCard: (state, action) => {
            return state.filter(item => item.laptopId !== action.payload.laptopId || item.size !== action.payload.size);
        },
        updateQuantity: (state, action) => {
            const item = state.find(item => item.laptopId === action.payload.laptopId && item.size === action.payload.size);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        }
    },
})

export const { addToCard, removeFromCard, updateQuantity } = cartSlice.actions

export default cartSlice.reducer