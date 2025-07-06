import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        userInfo: null
    },
    reducers: {
        addUser: (state, action) => ({
            ...state,
            userInfo: action.payload
        }),

        removeUser: (state, action) => ({
            ...state,
            userInfo: null
        })
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;