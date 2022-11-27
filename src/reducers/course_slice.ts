import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {RootState} from '../store/store'
import {courses} from '../components/global/data'

interface  Course_type {
    value: any,
}
const initialState: Course_type = {
    value: "sss"
    
}
export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        selected : (state: any, action: PayloadAction<string>) => {
            state.value = action.payload; 
        },
    }
})
export const { selected } = courseSlice.actions


//For the "state.myCourse.value" the myCourse is the one we declare on the "store.ts"


export default courseSlice.reducer