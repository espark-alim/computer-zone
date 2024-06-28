import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart_items',
    initialState: [],

    reducers: {
        addToCard: (state, action) => {
            const existingItemSize = state.find(item => item.id === action.payload.id && item.product === action.payload.product && item.size && item.size === action.payload.size);
            const existingItem = state.find(item => item.id === action.payload.id && item.product === action.payload.product);
            if (action.payload.product === 'laptop' && existingItemSize) {
                existingItemSize.quantity += action.payload.quantity;
            }
            else if (action.payload.product !== 'laptop' && existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCard: (state, action) => {
            return state.filter(item => item.id !== action.payload.id || item.product !== action.payload.product || item.size !== action.payload.size);
        },
        updateQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload.id && item.product === action.payload.product && item.size === action.payload.size);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        }
    },
})

export const { addToCard, removeFromCard, updateQuantity } = cartSlice.actions

export default cartSlice.reducer