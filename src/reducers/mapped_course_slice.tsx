import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { courses } from "../global/data";

interface mapped_courseSlice_types{
    selectedCourse:any[],
    courseSubject: any[]
   
}

const initialState: mapped_courseSlice_types = {
    selectedCourse: courses,
    courseSubject: courses.map(item=> item.Subject)
}

export const mapped_courseSlice = createSlice({
    name:'mapped_slice',
    initialState,
    reducers: {
       setSelectedCourse: (state,action) => {
        state.selectedCourse = courses[action.payload].Topics;
       },
       setCourseSubject: (state,action) => {
        state.selectedCourse = state.selectedCourse[action.payload].Title
       }
    }
})

export const { setSelectedCourse,setCourseSubject } = mapped_courseSlice.actions

export default mapped_courseSlice.reducer
