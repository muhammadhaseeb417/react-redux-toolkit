import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default cartSlice.reducer