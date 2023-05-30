import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : {},
    // userData : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload; 
        },
        logoutuser: (state) => { 
            state.userData = {};
        }
    }
})

export const { setUserData, logoutuser } = userSlice.actions;
export default userSlice.reducer;