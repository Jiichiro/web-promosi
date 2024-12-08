import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, action) {
            const item = state.items.find(item => item.items.id == action.payload.id)
            if (item) {
                item.qty++
            } else {
                state.items.push(action.payload)
            }
        },
        increment(state, action) {
            const item = state.items.find(item => item.items.id == action.payload.id)
            item.qty++
        },
        decrement(state, action) {
            const item = state.items.find(item => item.items.id == action.payload.id)
            item.qty--
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions
export default cartSlice.reducer