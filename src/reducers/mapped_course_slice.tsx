import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { courses } from "../global/data";

interface mapped_courseSlice_types{
    course_topics:any[],
   
}

const initialState: mapped_courseSlice_types = {
    course_topics: courses.map(item=> item.Topics).map((item=> item))
}

export const mapped_courseSlice = createSlice({
    name:'mapped_slice',
    initialState,
    reducers: {
    //    set_Selected_Course: state => {
    //     state.course_topics = 
    //    }
    }
})

// export const { setMappedTopic } = mapped_courseSlice.actions

export default mapped_courseSlice.reducer