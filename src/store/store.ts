import { configureStore } from '@reduxjs/toolkit'
import courseReducer from "../reducers/course_slice"
import  mapped_courseReducer from '../reducers/mapped_course_slice'
import  timerSlice  from '../reducers/timer_slice'
// ...

const store = configureStore({
  reducer: {
    myCourse: courseReducer,
    myMappedCourse: mapped_courseReducer,
    timerSlice:timerSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;