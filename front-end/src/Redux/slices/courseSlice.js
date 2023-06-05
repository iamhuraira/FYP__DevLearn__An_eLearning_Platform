import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseData: {},
    // userData : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
}
export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourseData: (state, action) => {
            state.courseData = action.payload;
        },
    }
})

export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;