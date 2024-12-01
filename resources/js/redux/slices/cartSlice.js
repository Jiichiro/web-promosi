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
                qty++
            } else {
                state.items.push(action.payload)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer