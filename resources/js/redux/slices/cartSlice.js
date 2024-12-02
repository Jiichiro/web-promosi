import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
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

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer